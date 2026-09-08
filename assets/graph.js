(function attachKnowledgeGraphRuntime(global) {
  const GRAPH_SCHEMA_VERSION = "unfinished-knowledge-graph/v0.1";

  function slugifyGraphValue(value) {
    return String(value ?? "unknown")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
      .replace(/^-+|-+$/g, "") || "unknown";
  }

  function graphNodeKey(type, value) {
    return `${type}-${slugifyGraphValue(value)}`;
  }

  function splitGraphText(value, limit = 4) {
    return Array.from(new Set(
      String(value || "")
        .split(/[；;，,\n、]+/)
        .map((item) => item.trim())
        .filter(Boolean)
    )).slice(0, limit);
  }

  function inferReasonCategory(text) {
    if (/资金|成本|预算|融资/.test(text)) return "resource";
    if (/数据|样本|标注/.test(text)) return "data";
    if (/团队|组织|协作/.test(text)) return "team";
    if (/实验|方法|流程|材料/.test(text)) return "method";
    if (/伦理|合规|隐私/.test(text)) return "ethics";
    return "general";
  }

  function inferAssetType(text) {
    if (/数据|dataset|样本|记录/i.test(text)) return "dataset";
    if (/脚本|代码|程序|模型/i.test(text)) return "code";
    if (/图|图纸|原型|设计/i.test(text)) return "design";
    if (/报告|文档|笔记|日志/i.test(text)) return "document";
    return "artifact";
  }

  function inferRouteFeasibility(item) {
    if (item.status === "已被继承" || item.status === "探索中") return "high";
    if (item.status === "等待传承" || item.status === "停滞中") return "medium";
    return "low";
  }

  function addGraphNode(nodeMap, node) {
    if (!nodeMap.has(node.id)) {
      nodeMap.set(node.id, node);
    }
    return nodeMap.get(node.id);
  }

  function addGraphEdge(edgeMap, edge) {
    const edgeId = edge.id || `${edge.from}::${edge.type}::${edge.to}`;
    if (!edgeMap.has(edgeId)) {
      edgeMap.set(edgeId, { ...edge, id: edgeId });
    }
    return edgeMap.get(edgeId);
  }

  function milestoneRelationScore(a, b) {
    let score = 0;
    if (a.field === b.field) score += 3;
    if (a.status === b.status) score += 2;
    if (a.inheritanceStatus === b.inheritanceStatus) score += 1;
    if (Math.abs((a.dataCompleteness || 0) - (b.dataCompleteness || 0)) <= 18) score += 1;
    if (Math.abs((a.logicCredibility || 0) - (b.logicCredibility || 0)) <= 18) score += 1;
    if (Math.abs((a.aiUsageCount || 0) - (b.aiUsageCount || 0)) <= 12) score += 1;
    return score;
  }

  function buildKnowledgeGraphSnapshot(milestones) {
    const nodeMap = new Map();
    const edgeMap = new Map();
    const documents = [];

    milestones.forEach((item) => {
      const projectNodeId = graphNodeKey("project", item.id);
      const personNodeId = graphNodeKey("person", item.pioneer);
      const fieldNodeId = graphNodeKey("field", item.field);
      const milestoneNodeId = graphNodeKey("milestone", item.id);
      const failureNodeId = graphNodeKey("failure", item.id);

      addGraphNode(nodeMap, {
        id: projectNodeId,
        type: "Project",
        sourceId: item.id,
        title: item.titleZh,
        titleEn: item.titleEn,
        summary: item.summary,
        status: item.status,
        visibility: item.dataLicense,
        startedAt: item.timeline?.[0]?.date || "",
        endedAt: item.timeline?.[item.timeline.length - 1]?.date || "",
        tags: [item.field, item.status]
      });
      addGraphNode(nodeMap, {
        id: personNodeId,
        type: "Person",
        sourceId: slugifyGraphValue(item.pioneer),
        name: item.pioneer,
        role: "Pioneer"
      });
      addGraphNode(nodeMap, {
        id: fieldNodeId,
        type: "Field",
        sourceId: slugifyGraphValue(item.field),
        name: item.field
      });
      addGraphNode(nodeMap, {
        id: milestoneNodeId,
        type: "Milestone",
        sourceId: item.id,
        title: item.titleZh,
        summary: item.summary,
        status: item.status,
        importance: Number((((item.dataCompleteness || 0) + (item.logicCredibility || 0)) / 200).toFixed(2))
      });
      addGraphNode(nodeMap, {
        id: failureNodeId,
        type: "Failure",
        sourceId: item.id,
        title: `${item.titleZh} failure`,
        summary: item.failureReasons,
        severity: item.status === "失联" ? "high" : item.status === "等待传承" ? "medium" : "low"
      });

      addGraphEdge(edgeMap, { from: personNodeId, to: projectNodeId, type: "CREATED", weight: 1 });
      addGraphEdge(edgeMap, { from: projectNodeId, to: fieldNodeId, type: "BELONGS_TO", weight: 0.92 });
      addGraphEdge(edgeMap, { from: projectNodeId, to: milestoneNodeId, type: "HAS_MILESTONE", weight: 1 });
      addGraphEdge(edgeMap, { from: projectNodeId, to: failureNodeId, type: "ENDED_WITH", weight: 0.84 });

      const assets = splitGraphText(item.inheritableAssets, 4);
      const routes = splitGraphText(item.futurePath, 3);
      const assetNodeIds = [];

      splitGraphText(item.failureReasons, 3).forEach((reasonText, index) => {
        const reasonNodeId = graphNodeKey("reason", `${item.id}-${index}-${reasonText}`);
        addGraphNode(nodeMap, {
          id: reasonNodeId,
          type: "Reason",
          sourceId: `${item.id}-reason-${index + 1}`,
          category: inferReasonCategory(reasonText),
          label: reasonText,
          summary: reasonText
        });
        addGraphEdge(edgeMap, {
          from: failureNodeId,
          to: reasonNodeId,
          type: "CAUSED_BY",
          weight: Math.max(0.46, 0.84 - index * 0.11)
        });
      });

      assets.forEach((assetText, index) => {
        const assetNodeId = graphNodeKey("asset", `${item.id}-${index}-${assetText}`);
        assetNodeIds.push(assetNodeId);
        addGraphNode(nodeMap, {
          id: assetNodeId,
          type: "Asset",
          sourceId: `${item.id}-asset-${index + 1}`,
          assetType: inferAssetType(assetText),
          title: assetText,
          summary: assetText,
          accessLevel: item.dataLicense
        });
        addGraphEdge(edgeMap, {
          from: projectNodeId,
          to: assetNodeId,
          type: "PRODUCED",
          weight: Math.max(0.52, 0.9 - index * 0.09)
        });
      });

      routes.forEach((routeText, index) => {
        const routeNodeId = graphNodeKey("route", `${item.id}-${index}-${routeText}`);
        addGraphNode(nodeMap, {
          id: routeNodeId,
          type: "Route",
          sourceId: `${item.id}-route-${index + 1}`,
          title: routeText,
          description: routeText,
          feasibility: inferRouteFeasibility(item)
        });
        addGraphEdge(edgeMap, {
          from: projectNodeId,
          to: routeNodeId,
          type: "CAN_CONTINUE_AS",
          weight: Math.max(0.5, 0.82 - index * 0.1)
        });

        const pairedAssetText = assets[index] || assets[0];
        const pairedAssetId = assetNodeIds[index] || assetNodeIds[0];
        if (pairedAssetText && pairedAssetId) {
          addGraphEdge(edgeMap, {
            from: pairedAssetId,
            to: routeNodeId,
            type: "SUPPORTS",
            weight: 0.63
          });
        }
      });

      documents.push({
        id: graphNodeKey("document", `${item.id}-journal`),
        type: "journal_entry",
        title: `${item.titleZh} · Journal Entry`,
        content: [item.summary, item.reviewReport].filter(Boolean).join("\n\n"),
        sourceProjectId: projectNodeId
      });
    });

    milestones.forEach((item) => {
      let bestMatch = null;
      let bestScore = 0;
      milestones.forEach((other) => {
        if (other.id === item.id) return;
        const score = milestoneRelationScore(item, other);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = other;
        }
      });
      if (!bestMatch || bestScore <= 0) return;
      addGraphEdge(edgeMap, {
        from: graphNodeKey("project", item.id),
        to: graphNodeKey("project", bestMatch.id),
        type: "RELATED_TO",
        weight: Number((bestScore / 9).toFixed(2)),
        relationBasis: [
          item.field === bestMatch.field ? "field" : "",
          item.status === bestMatch.status ? "status" : ""
        ].filter(Boolean)
      });
    });

    const nodes = Array.from(nodeMap.values());
    const edges = Array.from(edgeMap.values());
    const nodeById = new Map(nodes.map((node) => [node.id, node]));
    const edgesByNodeId = new Map();

    edges.forEach((edge) => {
      const current = edgesByNodeId.get(edge.from) || [];
      current.push(edge);
      edgesByNodeId.set(edge.from, current);
    });

    return {
      schemaVersion: GRAPH_SCHEMA_VERSION,
      exportedAt: new Date().toISOString(),
      nodes,
      edges,
      documents,
      nodeById,
      edgesByNodeId
    };
  }

  function createKnowledgeGraphStore(options) {
    const getMilestones = options?.getMilestones || (() => []);
    return {
      snapshot(milestones = getMilestones()) {
        return buildKnowledgeGraphSnapshot(milestones);
      },
      projectBundle(projectId, snapshot = this.snapshot()) {
        const projectNode = snapshot.nodes.find((node) => node.type === "Project" && node.sourceId === projectId);
        if (!projectNode) {
          return { projectNode: null, reasons: [], assets: [], routes: [], relatedProjects: [] };
        }

        const directEdges = snapshot.edges.filter((edge) => edge.from === projectNode.id);
        const failureEdge = directEdges.find((edge) => edge.type === "ENDED_WITH");
        const failureNode = failureEdge ? snapshot.nodeById.get(failureEdge.to) : null;
        const failureEdges = failureNode
          ? snapshot.edges.filter((edge) => edge.from === failureNode.id && edge.type === "CAUSED_BY")
          : [];

        return {
          projectNode,
          reasons: failureEdges.map((edge) => snapshot.nodeById.get(edge.to)).filter(Boolean),
          assets: directEdges.filter((edge) => edge.type === "PRODUCED").map((edge) => snapshot.nodeById.get(edge.to)).filter(Boolean),
          routes: directEdges.filter((edge) => edge.type === "CAN_CONTINUE_AS").map((edge) => snapshot.nodeById.get(edge.to)).filter(Boolean),
          relatedProjects: directEdges
            .filter((edge) => edge.type === "RELATED_TO")
            .map((edge) => snapshot.nodeById.get(edge.to))
            .filter(Boolean)
        };
      }
    };
  }

  global.UnfinishedKnowledgeGraph = {
    GRAPH_SCHEMA_VERSION,
    buildKnowledgeGraphSnapshot,
    createKnowledgeGraphStore
  };
})(window);
