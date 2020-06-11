module.exports = {
    outputDir: 'C:\\Source\\Code\\Client\\packages\\clients\\board-prototype\\dist',
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
            filename: 'board-prototype_vue_app.js'
        }
    }
}
