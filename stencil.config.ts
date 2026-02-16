import { Config } from "@stencil/core";
import { execSync } from "child_process";

export const config: Config = {
  namespace: "jebamo",
  enableCache: false,
  extras: {
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
  },
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "single-export-module",
      externalRuntime: false,
      dir: "components",
    },
    {
      type: "custom",
      name: "styles",
      async generator() {
        execSync(
          "npx sass src/styles/classes.scss:styles/classes.css src/styles/core.scss:styles/core.css src/styles/landmarks.scss:styles/landmarks.css",
        );
      },
    },
    {
      type: "docs-vscode",
      file: "dist/vscode-data.json",
    },
  ],
};
