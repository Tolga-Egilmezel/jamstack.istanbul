let scss = file => {
  const sass = require("sass");
  const Fiber = require("fibers");

  sass.render({
    file,
    outputStyle: "compressed", // compressed
    importer: function (url, prev, done) { },
    fiber: Fiber
  }, function (err, result) {
    if (err) console.log(err);

    const fs = require('fs');

    const stream = fs.createWriteStream(`${file.replace(/scss/g, 'css')}`, { encoding: 'utf8' });
    stream.write(result.css.toString());
    stream.end();

  });

}

module.exports = file => {
  scss(file);
  const chokidar = require('chokidar');
  chokidar.watch(file).on('all', (event, path) => {
    // console.log('chokidar', event, path);
    scss(file);
  });
};