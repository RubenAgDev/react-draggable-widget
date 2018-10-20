const path = require('path');
const webpackConfig = require('./webpack.dev.config.js');

module.exports = {
    title: 'Documentation',
    webpackConfig,
    sections: [
        {
            name: 'Documentation',
            content: 'README.md',
        },
        {
            name: 'Samples',
            components: 'src/**/*.js',
        },
    ],
    ribbon: {
        url: 'https://github.com/RubenAgDev/react-draggable-widget.git',
        text: 'Clone me on GitHub',
    },
    skipComponentsWithoutExample: false,
    styles: {
        Playground: {
            preview: {
                backgroundColor: '#EFEFEF'
            }
        }
    }
};
