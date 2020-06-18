module.exports = {
    outputDir: 'C:\\Source\\Code\\Client\\packages\\clients\\board\\dist',
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
    }
}
