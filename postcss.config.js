const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: ['./src/containers/SiteMain/**/*.js'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ],
};