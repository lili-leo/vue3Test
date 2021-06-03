// const path = require("path");
// const webpack = require("webpack");
// const CompressionWebpackPlugin = require("compression-webpack-plugin");
// const productionGzipExtensions = ["js", "css"];
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// let BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  // .BundleAnalyzerPlugin;
// const isProduction = process.env.NODE_ENV === 'production'
//   const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  // baseUrl: '/', // 根域上下文目录
  outputDir: "dist", // 构建输出目录
  assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  // productionGzip: true,
  pages: {
    // advertisingPage: {
    //   entry: "src/pages/advertisingPage/advertisingPage.js",
    //   template: "public/advertisingPage.html",
    //   filename: "advertisingPage.html",
    //   title: "test",
    // },
    index: {
      // page 的入口
      entry: "src/main.ts",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "aps",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  // 去除console.log打印以及注释
  //   configureWebpack: config => {
  //     const plugins = [];
  //     if (isProduction) {
  //       plugins.push(
  //         new UglifyJsPlugin({
  //           uglifyOptions: {
  //             output: {
  //               comments: false, // 去掉注释
  //             },
  //             warnings: false,
  //             compress: {
  //               drop_console: true,
  //               drop_debugger: false,
  //               pure_funcs: ['console.log']//移除console
  //             }
  //           }
  //         })
  //       )
  //     }
  //   },

  configureWebpack:{
  //   resolve: {// webpack配置，值位对象时会合并配置，为方法时会改写配置
  //     alias: {
  //       "@": path.resolve(__dirname, "./src"),
  //       "@i": path.resolve(__dirname, "./src/assets"),
  //     },
  //   },
    // plugins: [
    //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    //   new CompressionWebpackPlugin({// 下面是下载的插件的配置
    //     algorithm: "gzip",
    //     test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"), //处理所有匹配此 {RegExp} 的资源
    //     threshold: 10240, // 对超过10k的数据进行压缩
    //     minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
    //       // deleteOriginalAssets: true, // 删除原文件
    //   }),
    //   new webpack.optimize.LimitChunkCountPlugin({
    //     maxChunks: 5,
    //     minChunkSize: 100,
    //   }),
    //   // new BundleAnalyzerPlugin()
    // ]
  },
  chainWebpack: (config) => {
    if (isProduction) {
      // 打包分析
      // config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
      //   {
      //     analyzerMode: "static",
      //   },
      // ]);
      // }
      // 删除预加载
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      // 压缩代码
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: "all",
      });

      // 公共资源提取，
      // vendors提取的是第三方公共库(满足提取规则的node_modules里面的且页面引入的)，这些文件会打到dist/js/chunk-vendors.js里面
      // 提取规则是每个页面都引入的才会打到chunk-vendors.js里面(如vue.js)
      // 控制条件是minChunks字段，所以该字段的值是当前activity/src/projects里面的html的个数
      // common提取的应该是除了vendors提取后，剩余的满足条件的公共静态模块
      // 我们的项目不需要common，所以将common置为{}，覆盖默认common配置
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            name: "chunk-vendors",
            minChunks: 2,
            test: /node_modules/,
            priority: -10,
            chunks: "initial",
          },
          common: {},
        },
      });
    }
    // 修改loader 中关于images的设置
    // config.module
    //   .rule("images")
    //   .use("url-loader")
    //   .loader("url-loader")
    //   .tap((options) => {
    //     options.limit = 9999; // 修改 不大于9999字节的图片不打包 base64转码
    //     options.publicPath = "www.baidu.com"; // 对打包后的图片路径加上www.baidu.com
    //     // modify the options...
    //     return options;
    //   });

    // config.module
    //     .rule('html')
    //     .test(/\.(htm|html)$/i)
    //     .use('html-withimg-loader')
    //     .loader('html-withimg-loader')
    //     .end();

    config.plugin("extract-css").use(MiniCssExtractPlugin);

    // config.module.rules.push({
    //   test: /\.css$/,// 处理css
    //   use: [
    //     {
    //       loader: MiniCssExtractPlugin.loader,
    //       options: {
    //         publicPath: "../",
    //       },
    //     },
    //     "css-loader",
    //   ],
    // });

    // config.plugin("html").tap((args) => {
    //   args[0].template = "/Users/username/proj/app/templates/index.html";
    //   return args;
    // });
    new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
      })
  },
  // chainWebpack: (config) => {
    // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // config
    //   .plugin("webpack-bundle-analyzer")
    //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    //  }
  // },
  parallel: require("os").cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: {
    // 第三方插件配置
    externals: {
      // vue: "Vue",
      "element-ui": "ElementUI",
      echarts: "echarts",
      'vue-router': 'VueRouter',
      axios: 'axios',
    },
  },
  // pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // },
  devServer: {
    open: true,
    port: 8081,
    // productionGzip: true,
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://localhost:5001/api/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/php": {
        //本地服务接口地址
        // target: 'http://localhost',
        //远程演示服务地址,可用于直接启动项目
        // 192.168.11.175  
        // target: "http://192.168.252.198:3001/mock/205/",
        // target: "http://192.168.11.175:8111/",
        // target: "http://192.168.11.244:8111/",
        // target: "http://183.66.214.138:8111/",
        // target: "http://apsdemo.cn.utools.club/",
        target: "http://192.168.13.234:8111/",
        ws: true,
        pathRewrite: {
          "^/php": "/",
        },
      },
    },
    before: app => { }
  },
};
