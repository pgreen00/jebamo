import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  plugins: [
    sass()
  ],
  namespace: 'jebamo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
      generateTypeDeclarations: true
    },
    {
      type: 'docs-readme',
      dir: 'documentation'
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    angularOutputTarget({
      componentCorePackage: 'jebamo',
      outputType: 'standalone',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts',
      customElementsDir: 'dist/components'
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
