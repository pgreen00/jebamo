import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  plugins: [
    sass()
  ],
  extras: {
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true
  },
  namespace: 'jebamo',
  enableCache: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      dir: 'components'
    },
    angularOutputTarget({
      componentCorePackage: 'jebamo',
      outputType: 'component',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts'
    }),
    {
      type: 'docs-readme',
      dir: '../docs/docs',
      strict: true
    },
    {
      type: 'docs-vscode',
      file: 'dist/vscode-data.json'
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
