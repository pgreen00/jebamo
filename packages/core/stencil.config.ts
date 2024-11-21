import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  globalScript: 'src/global.ts',
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
      type: 'docs-readme',
      dir: 'documentation'
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    angularOutputTarget({
      componentCorePackage: 'jebamo',
      outputType: 'component',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts'
    }),
    {
      type: 'www',
      copy: [
        {
          src: 'styles.css'
        },
        {
          src: 'main.js'
        }
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
