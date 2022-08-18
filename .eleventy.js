const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/assets/css/**/*.css'
  });

  eleventyConfig.addPassthroughCopy("assets/svg");
  eleventyConfig.addPassthroughCopy("assets/script");
  eleventyConfig.addPassthroughCopy("assets/image");

  eleventyConfig.addTransform("sitemap-remove-extension", function (content, outputPath) {
    if (outputPath === "_site/sitemap.xml")
      return content.replaceAll('.html', '');

    return content;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  }
};