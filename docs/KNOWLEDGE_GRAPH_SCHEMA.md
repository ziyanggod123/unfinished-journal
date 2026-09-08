# Unfinished Knowledge Graph v0.1

This repository now includes a lightweight knowledge-graph adapter for the current milestone data model.

## Purpose

- Keep the current static frontend and star-map experience.
- Normalize milestone content into `nodes`, `edges`, and `documents`.
- Make later migration to JSON storage, SQL, or a graph database low-risk.

## Top-Level Shape

```json
{
  "schemaVersion": "unfinished-knowledge-graph/v0.1",
  "exportedAt": "2026-07-17T00:00:00.000Z",
  "nodes": [],
  "edges": [],
  "documents": []
}
```

## Node Types

- `Project`
- `Person`
- `Milestone`
- `Failure`
- `Reason`
- `Asset`
- `Field`
- `Route`

## Edge Types

- `CREATED`
- `BELONGS_TO`
- `HAS_MILESTONE`
- `ENDED_WITH`
- `CAUSED_BY`
- `PRODUCED`
- `CAN_CONTINUE_AS`
- `SUPPORTS`
- `RELATED_TO`

## Mapping Rules

- Each visible milestone becomes both a `Project` node and a `Milestone` node.
- The current `pioneer` field maps to `Person`.
- `failureReasons` is split into up to 3 `Reason` nodes.
- `inheritableAssets` is split into up to 4 `Asset` nodes.
- `futurePath` is split into up to 3 `Route` nodes.
- The existing similarity heuristic is preserved as `RELATED_TO` edges between projects.

## Runtime Use

- `Star Road` now consumes the graph snapshot as its relationship source.
- Milestone detail pages now render a graph summary section.
- Admin JSON export now includes `graph_snapshot`.

## Next Steps

1. Move graph snapshot generation into a dedicated module.
2. Persist `nodes` and `edges` outside `localStorage`.
3. Replace heuristic relation scoring with authored relations.
4. Add API endpoints or database adapters after the schema stabilizes.
