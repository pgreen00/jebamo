import { Config } from "@stencil/core";
import { execSync } from "child_process";
import { generateLoader } from "./generate-loader.mjs";
import { writeFileSync } from "fs";

export const config: Config = {
  namespace: "jebamo",
  enableCache: false,
  extras: {
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
  },
  outputTargets: [
    {
      type: "dist-custom-elements",
      externalRuntime: false,
      dir: "dist",
      customElementsExportBehavior: "auto-define-custom-elements",
      empty: false,
    },
    {
      type: "custom",
      name: "styles",
      async generator() {
        const files = [
          "src/styles/classes.scss:styles/classes.css",
          "src/styles/core.scss:styles/core.css",
          "src/styles/landmarks.scss:styles/landmarks.css",
        ];
        execSync(`npx sass ${files.join(" ")}`);
      },
    },
    {
      type: "custom",
      name: "auto-loader",
      async generator(_config, _compilerCtx, buildCtx, _docs) {
        const tagNames = buildCtx.components.map((t) => t.tagName);
        const loaderCode = generateLoader(tagNames);
        writeFileSync("./dist/loader.js", loaderCode, "utf8");
      },
    },
    {
      type: "docs-vscode",
      file: "dist/vscode-data.json",
    },
    {
      type: "docs-custom-elements-manifest",
      file: "dist/custom-elements.json",
    },
  ],
};
