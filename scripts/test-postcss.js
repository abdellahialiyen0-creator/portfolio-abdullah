const fs = require('fs');
const postcss = require('postcss');
const config = require('../postcss.config.js');
const css = fs.readFileSync('src/index.css', 'utf8');
console.log('PostCSS config:', config);
(async () => {
  try {
    const processor = postcss(config.plugins || []);
    console.log('Processor plugins:', processor.plugins.map(p => p.postcssPlugin || p.name || p.toString()));
    const result = await processor.process(css, { from: 'src/index.css' });
    console.log('Result CSS length', result.css.length);
  } catch (err) {
    console.error('Error during postcss processing:', err);
    process.exit(1);
  }
})();