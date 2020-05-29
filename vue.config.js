module.exports = {
    outputDir: '\dist',
    filenameHashing: false,
    runtimeCompiler: true,
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        output: {
            filename: 'board_vue_app.js'
        }
    },
    chainWebpack: config => {
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    }
}
