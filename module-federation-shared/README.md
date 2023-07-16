
## npm run dev 

运行效果如下

![运行图片](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a52bfa6daf0e4c0fb181a6bdfb6698e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

## 运行效果说明

remoteEntry.js 即 app-1 构建的应用入口文件；
src_utils_js.js 则是 import("RemoteApp/utils") 语句导入的远程模块。

## 总结

总结一下，MF 中的模块导出/导入方都依赖于 ModuleFederationPlugin 插件，其中导出方需要使用插件的 exposes 项声明导出哪些模块，使用 filename 指定生成的入口文件；导入方需要使用 remotes 声明远程模块地址，之后在代码中使用异步导入语法 import("module") 引入模块。

这种模块远程加载、运行的能力，搭配适当的 DevOps 手段，已经足以满足微前端的独立部署、独立维护、开发隔离的要求，在此基础上 MF 还提供了一套简单的依赖共享功能，用于解决多应用间基础库管理问题。