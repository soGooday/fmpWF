## 十分抱歉诸位看官 ！
这个工程我最近因精力应该不会放在这边，{因为面试的时候，阿里互动技术部的明非说“多看看基础，不要老瞄着业务做”。给我的提醒蛮大的，并且自己再看深入理解计算机原理这本书的时候。（！！文件=二进制+上下文！！）之前自己有研究过base64，突然发现。这些东西在处理文件处理方面（下载，修改）有着根本性指导建议（我之前是做游戏，一直不知道怎么给游戏截图。看到了上面那句话，想出来了一个canvas的截图方案）}。上面的事情越发的让我明白计算机基础的重要性。所以除非工作的需要，否则我2021年主要任务是“搞基建”。
# 话语
>起因
>因为我目前主要的工作是做互动的。
>互动的话一种是使用HTML进行搭建。一种是canvas实现（2D，3D）我的仓库中已经存在了一个[canvasWF](https://github.com/soGooday/canvasWF "canvasWF")是专门用于cavnvas的2D开发页面互动。它提供了一些基本方法。
>又因为我们有很多活动是通过HTML搭建的。但是页面的搭建，非常的浪费时间。所以就打算开发一个可视化的页面搭建工具fmpWF。提升这块工作效率。
## 思路
1. 整体会只对 html与CSS进行处理。
2. 搭建完毕之后。可以导出HTML与CSS（less sass）的文本 （使用二进制 + a标签）
3. js的逻辑处理。不会是这个工具的关注的点
4. 整体的工具UI布局会参考 unity 与 易企秀 跟自己的一些想法

### 组件
组件会被分为上下两个部分。
上部分：一个是组件选择，我可能会使用下拉框+本地记录处理。
下部分：是一个节点网状图。来明确当前的节点的位置。（树）

### 画布
会分title + scene 
title  模拟浏览器的手机模式
scene  是场景的处理搭建

### 属性
这边只有一个部分。但是是以组件化的方式展现的，每一个的HTML对应一个配置（基本的配置可以是继承）

## 目前上面是自己的一些想法。留做笔记。防止自己忘记
