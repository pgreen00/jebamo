export default async function(eleventyConfig) {
  eleventyConfig.setIncludesDirectory("includes");
  eleventyConfig.addGlobalData('layout', 'default');
  eleventyConfig.addPassthroughCopy({
    "./dist/": "build/jebamo/dist/",
    "./styles/": "build/jebamo/styles/",
  });

	eleventyConfig.addCollection("navigation", function(collectionApi) {
		const pages = collectionApi.getAll().filter(p => p.inputPath.includes('components'));
		const nav = {};

		pages.forEach(page => {
			const pathSegments = page.inputPath
				.replace('./docs/components', '')
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

	eleventyConfig.addFilter("navToArray", function(navObj) {
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
				return dir.replace('docs/', '/');
			}
			return data.permalink;
		}
	});
};
