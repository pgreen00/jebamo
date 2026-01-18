import markdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import toc from "markdown-it-table-of-contents";
import multimdTable from "markdown-it-multimd-table";
import { load } from "cheerio";
import markdownItContainer from "markdown-it-container";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (eleventyConfig) {
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  })
    .use(anchor, {
      permalink: anchor.permalink.headerLink({
        renderAttrs: () => ({ "data-toc": "" }),
      }),
      level: [2],
    })
    .use(toc, {
      includeLevel: [1, 2],
    })
    .use(multimdTable, {
      multiline: true,
      rowspan: true,
      headerless: true,
      multibody: true,
    });

  eleventyConfig.addPlugin(syntaxHighlight);
  const defaultFence = md.renderer.rules.fence;

  md.use(markdownItContainer, "live-code-demo", {
    validate: function (params) {
      return params.trim() === "live-code-demo";
    },
    render: function (tokens, idx, options, env, renderer) {
      if (tokens[idx].nesting === 1) {
        const codeBlocks = [];
        for (
          let i = idx + 1;
          i < tokens.length && tokens[i].nesting !== -1;
          i++
        ) {
          if (tokens[i].type === "fence") {
            const info = tokens[i].info ? tokens[i].info.trim() : "";
            const language = info.split(/\s+/g)[0];
            codeBlocks.push({
              language: language,
              content: tokens[i].content,
              original: defaultFence(tokens, i, options, env, renderer),
            });

            tokens[i].consumed = true;
          }
        }

        const html = codeBlocks.find((t) => t.language === "html");
        let js = codeBlocks.find((t) => t.language === "javascript");

        const id = `code-demo-${Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join("")}`;
        return `
          <div id="${id}" class="je-radius-lg" style="box-sizing:border-box;border:solid 1px light-dark(var(--je-neutral-500), var(--je-neutral-800));">
            <div class="demo-result je-padding">
              ${html?.content ?? ""}
              ${js ? `<script type="module">${js.content}</script>` : ""}
            </div>
            <je-divider spacing="none"></je-divider>
            <div class="je-padding">
            <je-tabs id="${id}-tabs" value="HTML">
              ${html ? "<je-tab>HTML</je-tab>" : ""}
              ${js ? "<je-tab>Javascript</je-tab>" : ""}
            </je-tabs>
            <div id="${id}-tab-content"></div>
            </div>
          </div>
          <script type="module">
          await customElements.whenDefined('je-tabs')
          const tabs = document.querySelector('je-tabs#${id}-tabs')
          const root = document.querySelector('div#${id}-tab-content')
          const htmlTemplate = \`${html.original}\`
          const jsTemplate = \`${js?.original || ""}\`
          root.innerHTML = htmlTemplate
          tabs.addEventListener('valueChange', ({detail}) => {
            if (detail === 'HTML') root.innerHTML = htmlTemplate
            if (detail === 'Javascript') root.innerHTML = jsTemplate
          })
          </script>
        `;
      } else {
        return "";
      }
    },
  });

  md.renderer.rules.fence = function (tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    const info = token.info ? token.info.trim() : "";
    const langName = info.split(/\s+/g)[0];
    const content = token.content;

    if (langName === "mermaid") {
      return `<div class="mermaid">${content}</div>`;
    }
    if (token["consumed"]) {
      return "";
    } else {
      return defaultFence(tokens, idx, options, env, renderer);
    }
  };

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.setIncludesDirectory("includes");
  eleventyConfig.addGlobalData("layout", "default");
  eleventyConfig.addPassthroughCopy({
    "./dist": "build/jebamo/dist/",
    "./styles": "build/jebamo/styles/",
    "./src/docs/public": "/",
    "../../node_modules/mermaid/dist": "build/mermaid/",
  });

  eleventyConfig.addFilter("toc", function (content) {
    const $ = load(content);
    const headings = $("h2, h3, h4, h5, h6");

    if (headings.length === 0) return "";

    let toc = '<ul class="toc-list">';
    headings.each(function () {
      const level = parseInt(this.tagName.substring(1));
      const text = $(this).text().replace(/^#\s*/, ""); // Remove leading #
      const id =
        $(this).attr("id") ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-");

      // Ensure heading has ID
      $(this).attr("id", id);

      const className = `toc-level-${level}`;
      toc += `<li class="${className}"><a href="#${id}">${text}</a></li>`;
    });
    toc += "</ul>";

    return toc;
  });

  eleventyConfig.addFilter("removeTocMarker", function (content) {
    return content.replace(/\[\[toc\]\]/gi, "");
  });

  eleventyConfig.addCollection("navigation", function (collectionApi) {
    const pages = collectionApi
      .getAll()
      .filter((p) => p.inputPath.includes("components"));
    const nav = {};

    pages.forEach((page) => {
      const pathSegments = page.inputPath
        .replace("./src/docs/components", "")
        .replace("/readme.md", "")
        .replace(".md", "")
        .split("/");

      let current = nav;
      pathSegments.forEach((segment, index) => {
        if (segment && segment !== ".") {
          if (!current[segment]) {
            current[segment] = {
              title: segment,
              url: null,
              children: {},
              page: null,
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
      if (data.page.inputPath.endsWith("/readme.md")) {
        const dir = data.page.inputPath.replace("/readme.md", "/");
        return dir.replace("src/docs/", "/");
      }
      return data.permalink;
    },
  });

  return {
    dir: {
      input: "src/docs",
      output: "www",
    },
  };
}
