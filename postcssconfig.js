/* this can be used as a filter like this  {{ "postcss/styles.css"| postcss }} */


const postcss = require("postcss");
const fs = require("fs");
const sugarss = require("sugarss");
const tokens = require("./postcss/tokens");
const plugins = [
    require("postcss-import"),
    require('postcss-variables')({ globals: tokens }),
    //require("cssnano")

]

fs.readFile('postcss/styles.css', (err, css) => {
    postcss(plugins)
        .process(css, { from: 'postcss/styles.css', to: '_includes/styles/app.css', parser: sugarss })
        .then(result => {
            fs.writeFile('_includes/styles/app.css', result.css, () => true)
            if (result.map) {
                fs.writeFile('_includes/styles/app.css.map', result.map, () => true)
            }
        })
})


fs.readFile('postcss/audio.css', (err, css) => {
    postcss(plugins)
        .process(css, { from: 'postcss/audio.css', to: '_includes/styles/audio.css', parser: sugarss })
        .then(result => {
            fs.writeFile('_includes/styles/audio.css', result.css, () => true)
            if (result.map) {
                fs.writeFile('_includes/styles/audio.css.map', result.map, () => true)
            }
        })
})