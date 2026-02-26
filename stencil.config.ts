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
      type: "dist-custom-elements",
      externalRuntime: false,
      autoLoader: true,
      dir: "dist",
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
      type: "docs-vscode",
      file: "dist/vscode-data.json",
    },
  ],
};
