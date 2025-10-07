import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'jebamo',
  enableCache: false,
  extras: {
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
      dir: 'components'
    },
    angularOutputTarget({
      componentCorePackage: 'jebamo',
      outputType: 'standalone',
      directivesProxyFile: '../angular/src/lib/components.ts'
    }),
    {
      type: 'docs-readme',
      dir: '../docs/pages',
      strict: true
    },
    {
      type: 'docs-vscode',
      file: 'dist/vscode-data.json'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
