import path from 'path';
import type { LoadContext, Plugin } from '@docusaurus/types';

/**
 * A simple Docusaurus plugin that injects a client module
 * to run defineCustomElements() in the browser.
 */
export default function jebamoPlugin(_context: LoadContext, _options: unknown): Plugin {
  return {
    name: 'jebamo-plugin',
    getClientModules() {
      return [path.resolve(__dirname, './loader-define.ts')];
    },
  };
}
