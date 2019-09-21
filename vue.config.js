const path = require('path')
const webpack = require("webpack")

module.exports = {
    // 基本路径
    publicPath: './',
    // publicPath: './', //vueConf.baseUrl, // 根域上下文目录 域名，可根据环境变量来配置不同域名。
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    configureWebpack: (config) => {
            if (process.env.NODE_ENV === 'production') {
                // 为生产环境修改配置...
                config.mode = 'production';
            } else {
                // 为开发环境修改配置...
                config.mode = 'development';
            }

            Object.assign(config, {
                // 开发生产共同配置
                resolve: {
                    alias: {
                        '@': path.resolve(__dirname, './src'),
                        '@c': path.resolve(__dirname, './src/components')
                    }
                }
            });
        },
    css: { // 配置高于chainWebpack中关于css loader的配置
        // modules: true, // 是否开启支持‘foo.module.css’样式
        // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        loaderOptions: { // css预设器配置项
            sass: {
                data: '' //`@import "@/assets/scss/mixin.scss";`
            }
        }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                target: 'http://gank.io/api/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}