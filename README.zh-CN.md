[![Required Node.JS >= 14.18.0 || >=16.0.0](https://img.shields.io/static/v1?label=node&message=14.18.0%20||%20%3E=16.0.0&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)


## 概述

📦 开箱即用  
🎯 基于官方的 [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), 低侵入性  
🌱 结构清晰，可塑性强  
💪 支持在渲染进程中使用 Electron、Node.js API  
🔩 支持 C/C++ 模块  
🖥 很容易实现多窗口  

## 快速开始

```sh
# install dependency
npm install

# develop
npm run dev
```

## 调试

![electron-vite-react-debug.gif](/electron-vite-react-debug.gif)

## 目录

*🚨 默认情况下, `electron` 文件夹下的文件将会被构建到 `dist-electron`*

```tree
├── electron                                 Electron 源码文件夹
│   ├── main                                 Main-process 源码
│   └── preload                              Preload-scripts 源码
│
├── release                                  构建后生成程序目录
│   └── {version}
│       ├── {os}-{os_arch}                   未打包的程序(绿色运行版)
│       └── {app_name}_{version}.{ext}       应用安装文件
│
├── public                                   同 Vite 模板的 public
└── src                                      渲染进程源码、React代码
```

<!--
## 🚨 这需要留神

默认情况下，该模板在渲染进程中集成了 Node.js，如果你不需要它，你只需要删除下面的选项. [因为它会修改 Vite 默认的配置](https://github.com/electron-vite/vite-plugin-electron-renderer#config-presets-opinionated).

```diff
# vite.config.ts

export default {
  plugins: [
    ...
-   // Use Node.js API in the Renderer-process
-   renderer({
-     nodeIntegration: true,
-   }),
    ...
  ],
}
```
-->
