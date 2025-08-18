<h1 align="center"><a href="https://github.com/lynx-demo" target="_blank">Lynx-demo</a></h1>

<p align="center">
  <a href="https://github.com/lynx-demo/lynx-demo/stargazers"><img alt="star" src="https://img.shields.io/github/stars/lynx-demo/lynx-demo.svg?label=Stars&style=social"/></a>
  <a href="https://github.com/lynx-demo/lynx-demo/network/members"><img alt="star" src="https://img.shields.io/github/forks/lynx-demo/lynx-demo.svg?label=Fork&style=social"/></a>
  <a href="https://github.com/lynx-demo/lynx-demo/watchers"><img alt="star" src="https://img.shields.io/github/watchers/lynx-demo/lynx-demo.svg?label=Watch&style=social"/></a>
</p>

## Lynx-demo

Lynx demo 是一个用来深度学习并实战 lynx 的项目，[参考文档](https://lynxjs.org/zh/guide/start/quick-start.html)

## 运行方式

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

## 项目目录
```
.
├── src                                         // 源码目录
│   ├── assets                                  // 组件
│   ├── components                              // 组件
│   │   ├── index                               // 首页组件
│   │   │   ├── Detail.tsx                      // 列表详情组件
│   │   │   ├── Footer.tsx                      // 首页底部导航
│   │   │   ├── Header.tsx                      // 首页头部组件
│   │   │   ├── List.tsx                        // 瀑布流列表
│   │   │   ├── ListItem.tsx                    // 列表项公共组件
│   │   │   ├── Search.tsx                      // 搜索模块
│   │   │   ├── SearchResult.tsx                // 搜索结果模块
│   │   │   └── Sidebar.tsx                     // 首页侧边栏
│   ├── Index                                   // 首页视图
│   │   └── index.tsx                           // 首页入口文件
│   ├── scss                                    // 样式文件
│   │   └── index.scss                          // 首页样式
│   ├── App.scss                                // 全局样式
│   ├── lynx-jsx.d.ts                           // 全局声明文件
│   ├── rspeedy-env.d.ts                        // rspeedy 声明文件
│   ├── utils.tsx                               // 公共方法
├── lynx.config.ts                              // 项目配置
├── tsconfig.json                               // ts配置
.
```

## 部分截图

<img src="https://github.com/lynx-demo/lynx-demo/blob/main/src/assets/screenshots/1.gif" width="365" height="673"/> <img src="https://github.com/lynx-demo/lynx-demo/blob/main/src/assets/screenshots/2.gif" width="365" height="673"/>

