import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const read = (file) => readFile(path.join(root, file), "utf8");
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

const [
  index,
  deployIndex,
  srcIndex,
  styles,
  deployStyles,
  srcStyles,
  app,
  deployApp,
  srcApp,
  graph,
  deployGraph,
  srcGraph,
] = await Promise.all([
  read("index.html"),
  read("deploy/index.html"),
  read("src/index.html"),
  read("assets/styles.css"),
  read("deploy/assets/styles.css"),
  read("src/styles/main.css"),
  read("assets/app.js"),
  read("deploy/assets/app.js"),
  read("src/scripts/app.js"),
  read("assets/graph.js"),
  read("deploy/assets/graph.js"),
  read("src/scripts/graph.js"),
]);

check(index === deployIndex, "index.html and deploy/index.html have drifted");
check(styles === deployStyles, "assets/styles.css and deploy/assets/styles.css have drifted");
check(styles === srcStyles, "assets/styles.css and src/styles/main.css have drifted");
check(app === deployApp, "assets/app.js and deploy/assets/app.js have drifted");
check(app === srcApp, "assets/app.js and src/scripts/app.js have drifted");
check(graph === deployGraph, "assets/graph.js and deploy/assets/graph.js have drifted");
check(graph === srcGraph, "assets/graph.js and src/scripts/graph.js have drifted");

const normalizedSrcIndex = srcIndex
  .replace('href="styles/main.css"', 'href="assets/styles.css"')
  .replace('src="scripts/graph.js?v=20260717-kg1"', 'src="assets/graph.js?v=20260717-kg1"')
  .replace('src="scripts/app.js?v=20260717-kg1"', 'src="assets/app.js?v=20260717-kg1"');
check(index === normalizedSrcIndex, "src/index.html differs beyond its expected asset paths");

for (const [name, content] of [
  ["index.html", index],
  ["assets/styles.css", styles],
  ["assets/app.js", app],
  ["assets/graph.js", graph],
]) {
  check(!content.includes("锟�"), `${name} contains a replacement character`);
}

const ids = [...index.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, position) => ids.indexOf(id) !== position);
check(duplicateIds.length === 0, `duplicate HTML ids: ${[...new Set(duplicateIds)].join(", ")}`);

const pageIds = new Set(
  [...index.matchAll(/\bid="page-([^"]+)"/g)].map((match) => match[1]),
);
const routeAliases = new Set(["browse", "submission"]);
const literalRoutes = new Set(
  [...index.matchAll(/navigateTo\('([^']+)'\)/g)].map((match) => match[1]),
);
const missingRoutes = [...literalRoutes].filter(
  (route) => !pageIds.has(route) && !routeAliases.has(route) && !route.includes("/"),
);
check(missingRoutes.length === 0, `routes without matching pages: ${missingRoutes.join(", ")}`);

const localAssets = new Set(
  [...index.matchAll(/(?:href|src)="([^"]+)"/g)]
    .map((match) => match[1].split("?")[0])
    .filter((value) => !/^(?:#|https?:|mailto:|data:)/.test(value)),
);

for (const asset of localAssets) {
  try {
    await access(path.join(root, asset));
  } catch {
    failures.push(`missing local asset: ${asset}`);
  }
}

if (failures.length) {
  console.error("Site validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Site validation passed: ${pageIds.size} pages, ${ids.length} unique ids, ${localAssets.size} local assets.`,
);
