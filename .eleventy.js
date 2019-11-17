module.exports = config => {

  const _scss = require('./config/_scss');
  _scss('./scss/main.scss');

  config.addPassthroughCopy("css");
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site"
    }
  }
};
