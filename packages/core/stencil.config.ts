import { Config } from "@stencil/core";
import { angularOutputTarget } from "@stencil/angular-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";
import { execSync } from "child_process";

export const config: Config = {
  namespace: "jebamo",
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
          "npx sass src/styles/classes.scss:styles/classes.css src/styles/core.scss:styles/core.css",
        );
      },
    },
    {
      type: "docs-vscode",
      file: "dist/vscode-data.json",
    },
    angularOutputTarget({
      componentCorePackage: "jebamo",
      outputType: "standalone",
      directivesProxyFile: "../angular/src/lib/components.ts",
    }),
    reactOutputTarget({
      outDir: "../react/src/lib/",
    }),
  ],
};
