/**
 * Created by MonTage_fz on 2019/9/25
 */
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                    }),
                ],
            },
        },
    },
};
