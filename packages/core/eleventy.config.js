import markdownIt from "markdown-it";
import anchor from "markdown-it-anchor"
import toc from "markdown-it-table-of-contents"
import multimdTable from "markdown-it-multimd-table";
import { load } from "cheerio"
import markdownItContainer from 'markdown-it-container';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'

export default async function (eleventyConfig) {
  let markdownLib = markdownIt({
    html: true,
    breaks: true,
    //linkify: true,
    //typographer: true
  }).use(anchor, {
    permalink: anchor.permalink.headerLink()
  }).use(toc, {
    includeLevel: [1, 2, 3]
  }).use(multimdTable, {
    multiline: true,
    rowspan: true,
    headerless: true,
    multibody: true
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  markdownLib.use(markdownItContainer, 'live-code-demo', {
    validate: function(params) {
      return params.trim() === 'live-code-demo';
    },
    render: function(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        // Opening tag - process the content and mark tokens as consumed
        const content = extractAndMarkCodeBlocks(tokens, idx);
        return renderLiveDemo(content);
      } else {
        // Closing tag
        return '';
      }
    }
  });

  // Override fence rendering to skip marked tokens
  const originalFenceRule = markdownLib.renderer.rules.fence || function(tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options);
  };

  markdownLib.renderer.rules.fence = function(tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    const info = token.info ? token.info.trim() : '';
    const langName = info.split(/\s+/g)[0];
    const content = token.content;

    if (langName === 'mermaid') {
      return `<div class="mermaid">${content}</div>`
    } else {
      return originalFenceRule(tokens, idx, options, env, renderer);
    }
  };

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.setIncludesDirectory("includes");
  eleventyConfig.addGlobalData('layout', 'default');
  eleventyConfig.addPassthroughCopy({
    "./dist": "build/jebamo/dist/",
    "./styles": "build/jebamo/styles/",
    "./src/docs/public": "/",
    "../../node_modules/mermaid/dist": "build/mermaid/",
  });

  // TOC extraction filter
  eleventyConfig.addFilter("toc", function(content) {
    const $ = load(content);
    const headings = $('h2, h3, h4, h5, h6');

    if (headings.length === 0) return '';

    let toc = '<ul class="toc-list">';
    headings.each(function() {
      const level = parseInt(this.tagName.substring(1));
      const text = $(this).text().replace(/^#\s*/, ''); // Remove leading #
      const id = $(this).attr('id') || text.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');

      // Ensure heading has ID
      $(this).attr('id', id);

      const className = `toc-level-${level}`;
      toc += `<li class="${className}"><a href="#${id}">${text}</a></li>`;
    });
    toc += '</ul>';

    return toc;
  });

  // Remove TOC marker
  eleventyConfig.addFilter("removeTocMarker", function(content) {
    return content.replace(/\[\[toc\]\]/gi, '');
  });

  eleventyConfig.addCollection("navigation", function (collectionApi) {
    const pages = collectionApi.getAll().filter(p => p.inputPath.includes('components'));
    const nav = {};

    pages.forEach(page => {
      const pathSegments = page.inputPath
        .replace('./src/docs/components', '')
        .replace('/readme.md', '')
        .replace('.md', '')
        .split('/');

      let current = nav;
      pathSegments.forEach((segment, index) => {
        if (segment && segment !== '.') {
          if (!current[segment]) {
            current[segment] = {
              title: segment,
              url: null,
              children: {},
              page: null
            };
          }

          if (index === pathSegments.length - 1) {
            current[segment].url = page.url;
            current[segment].page = page;
            current[segment].title = page.data.sidebar_label || segment;
          }

          current = current[segment].children;
        }
      });
    });

    return nav;
  });

  eleventyConfig.addFilter("navToArray", function (navObj) {
    return Object.values(navObj).sort((a, b) => {
      const orderA = a.page?.data?.order || 999;
      const orderB = b.page?.data?.order || 999;
      if (orderA !== orderB) return orderA - orderB;
      return a.title.localeCompare(b.title);
    });
  });

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.page.inputPath.endsWith('/readme.md')) {
        const dir = data.page.inputPath.replace('/readme.md', '/');
        return dir.replace('src/docs/', '/');
      }
      return data.permalink;
    }
  });

  return {
    dir: {
      input: 'src/docs',
      output: 'www'
    }
  }
};

function extractAndMarkCodeBlocks(tokens, startIdx) {
  const codeBlocks = [];
  let i = startIdx + 1;

  while (i < tokens.length && tokens[i].nesting !== -1) {
    if (tokens[i].type === 'fence') {
      const info = tokens[i].info ? tokens[i].info.trim() : '';
      const language = info.split(/\s+/g)[0];
      codeBlocks.push({
        language: language,
        content: tokens[i].content
      });

      // Mark this token as consumed so it won't render normally
      tokens[i].consumed = true;
    }
    i++;
  }

  return codeBlocks;
}

function renderLiveDemo(codeBlocks) {
  let htmlContent = '';
  let jsContent = '';

  codeBlocks.forEach(block => {
    if (block.language === 'html') {
      htmlContent += block.content;
    } else if (block.language === 'javascript') {
      jsContent += block.content;
    }
  });

  return `
    <div class="live-code-demo">
      <div class="demo-result">
        ${htmlContent}
        ${jsContent ? `<script type="module">${jsContent}</script>` : ''}
      </div>
    </div>
  `;
}
