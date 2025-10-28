import markdownIt from "markdown-it";
import anchor from "markdown-it-anchor"
import toc from "markdown-it-table-of-contents"
import multimdTable from "markdown-it-multimd-table";
import { load } from "cheerio"

export default async function (eleventyConfig) {
  let markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
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
