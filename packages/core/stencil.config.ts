import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import sass from 'sass';
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

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
    {
      type: 'custom',
      name: 'styles',
      async generator() {
        try {
          const classesResult = sass.compile('src/styles/classes.scss', {
            sourceMap: true,
            sourceMapIncludeSources: true
          });
          await mkdir(dirname('styles/classes.css'), { recursive: true });
          await writeFile('styles/classes.css', classesResult.css);
          await writeFile('styles/classes.css.map', JSON.stringify(classesResult.sourceMap));

          const coreResult = sass.compile('src/styles/core.scss', {
            sourceMap: true,
            sourceMapIncludeSources: true
          });
          await writeFile('styles/core.css', coreResult.css);
          await writeFile('styles/core.css.map', JSON.stringify(coreResult.sourceMap));
        } catch (error) {
          console.error('Sass compilation failed:', error);
          throw error;
        }
      },
    },
    angularOutputTarget({
      componentCorePackage: 'jebamo',
      outputType: 'standalone',
      directivesProxyFile: '../angular/src/lib/components.ts'
    }),
    reactOutputTarget({
      outDir: '../react/src/lib/'
    }),
    {
      type: 'docs-readme',
      dir: 'docs',
      strict: true
    },
    {
      type: 'docs-vscode',
      file: 'dist/vscode-data.json'
    },
    {
      type: "custom",
      name: "www",
      async generator(config, compilerCtx, buildCtx, docs) {
        const Eleventy = await import('@11ty/eleventy').then(m => m.default);
        const elev = new Eleventy("./docs", "www");
        await elev.init();
        await elev.write();
      },
    }
  ]
};
