# 2020.5.11

## CSS

### background

linear-gradient

渐变属性 参数三个 角度 从某一个颜色到某一个颜色

```css
.xxx{
   background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
}
```

### transform

变形、缩放、移动、旋转、倾斜·····

```css
//缩放
.p1:hover{
    transform: scale(1.1);
}
//延X轴水平倾斜40°
.p2:hover{
    transform: skewX(40deg);
}
//延Y轴垂直倾斜-15°
.p3:hover{
    transform: skewY(-15deg)
}
```

### box-shadow

box-shadow属性 offset-x offset-y blur-radius spread-radius 颜色

```css
div{
    box-shadow: 25px 10px 10px 10px green;
}
```

### 伪元素

::before ::after 在选定元素之前或之后添加内容

```css
div::before{
    
}
div::after{
    
}
```

### 动画

#### @keyframes

为元素设置动画 

在需要添加动画的元素中添加animation-name属性 属性值为动画名称

添加animation-duration属性 属性值为持续时间(单位s)

定义动画之后为动画添加效果@keyframs+动画名字(name)

定义0%~100%内阶段动画变化

```css
#div1{
    animation-name: colorful;
    animation-duration: 3s;
}
@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

#### 动画填充模式

```css
button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    //保持状态
    animation-fill-mode: forwards;
  }
```

#### opacity

透明度

```css
 @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
```

#### 动画动作计数

animation-iteration-count 属性值为次数 数字或infinite

```css
  #div {
    animation-name: move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
```

#### 动画变化速度

animation-timing-function

```css
#div1 {
    //匀速
    animation-timing-function: linear;
}
#div2 {
    //快 慢
    amimation-timing-function: ease-out;
}
#div3 {
    //慢 快
    amimation-timing-function: ease-in;
}
#div3 {
    //慢 快 慢
    amimation-timing-function: ease;
}
```

#### 贝塞尔曲线

```css
#div{
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
}
```

# 2020.5.12

## HTML5

### img

```html
//图片无法加载时 文字提示
<img src="xxxx" alt="图片飞走了~">
```

### 标签语义化

```html
<!-- 页面头部 -->
<header>
    <h1>hello</h1>
    <!-- nav 导航 -->
    <nav>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">文档</a></li>
            <li><a href="#">我的</a></li>
        </ul>
    </nav>
</header>
<!-- main主体内容部分 -->
<main>
    <!--section内容分组-->
    <section>
        <h2>这是一个二级标题</h2>
        <!--article内容独立-->
        <article><h3>三级标题1</h3></article>
        <article><h3>三级标题2</h3></article>
    </section>
</main>
<!-- 页面底部 -->
<footer>页面底部</footer>

```

label标签 将表单控件关联起来 使文本可以单击

label for属性值与inputID值相同

```html
 <form action="">
     <label for="email">Email:</label>
     <input type="text" id="email" name="email">
     <br/>
     <label>Email:</label>
     <input type="text">
</form>
```



### 音频播放

```html
<!--controls 默认浏览器控件-->
<audio controls>
      <source src=" 	https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
     </source>
</audio>
```

### 图形元素

```html
<figure>
    <figcaption>Breakdown per week of time to spend 		training in stealth, combat, and weapons.		         </figcaption>
</figure>
```

### 表单元素

fieldset单选按钮分组 

```html
<form action="">
        <!-- 单选按钮框起来为一组 -->
        <fieldset>
            <!-- legend分组描述 -->
            <legend>喜欢下列那种水果？</legend>
            <input id="apple" type="radio" name="apple" value="苹果">
            <label for="apple">苹果</label><br>
            <input id="banana" type="radio" name="banana" value="香蕉">
            <label for="banana">香蕉</label><br>
            <input id="orange" type="radio" name="orange" value="橘子">
            <label for="orange">橘子</label>
        </fieldset>
    </form>
```

input设置时间  type值为date

```html
<form>
    <label for="pickdate">Enter a date:</label>
    <input type="date" id="pickdate" name="date">
</form>
```

## 响应式

CSS3flexbox(弹性盒子)

### flex-direction

display：flex；将元素变为flex容器 将所有子元素对齐到行或列

在父元素添加flex-direction 设置行或列对齐

```css
<style>
  #box-container {
    display: flex;
    height: 500px;
    /*
      对齐方式
      默认为row 行排列
      row-reverse 行排列反
      column 列排列
      column-reverse 列排列反
    */
    flex-direction: row-reverse;
    /* flex-direction: column */
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

### justify-content

flex后元素排列方式

![](F:\notes\随笔\images\flex-direction-terms.svg)

| justify-content |                                                              |
| --------------- | ------------------------------------------------------------ |
| center          | 将所有flex元素与flex容器内的中心对齐                         |
| flex-start      | 元素与flex容器开头对齐，第一行为左侧(默认对齐方式)           |
| flex-end        | 元素与flex容器末端对齐，第一行为右侧，列为最底部             |
| space-between   | 元素与主轴中心对齐，第一个最后一个被推倒flex容器边缘，剩下空间均匀分配 |
| space-around    | 类似space-between第一个与最后一二元素未被锁定到边缘          |
| space-evenly    | flex元素之间盘平均分配空间 flex容器任一端都有一个完整的空间  |

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>

```

# 2020.5.13

## FlexBox

### align-items

类似于justify-content

align-items使弹性元素沿交叉轴(行，交叉轴垂直，列，交叉轴水平)

| align-items | 默认值为stretch                        |
| ----------- | -------------------------------------- |
| flex-start  | 元素与flex容器开头对齐 行，顶 列，左   |
| flex-end    | 元素与flex容器末端对齐 行，底 列，右   |
| center      | 元素对准中心 行，垂直对齐 列，水平对齐 |
| stretch     | 拉伸元素填充弹性容器                   |
| baselin     | 元素与奇准对齐                         |

```css
#container {
    background: gray;
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;

}
```

### flex-wrap

将弹性元素拆分为多行(或多列) 默认为将所有元素放在一起 全部在一行

使用flex-wrap 会将多余的元素移动到新的行(或列) 发生的断点取决于元素大小与容器大小

| flex-wrap    | 默认值为nowrap                           |
| ------------ | ---------------------------------------- |
| nowrap       | 不包装元素                               |
| wrap         | 元素连续，从左到右包装 如果是列 冲上到下 |
| wrap-reverse | 元素连续，从右到左，如果是列，从下到上   |

### flex-shrink

收缩元素

flex-shrink值为数字 数字越大，收缩幅度越大

```css
container{
    flex-shrink: 3;
}
```

### flex-grow

扩展元素

flex-grow 如果一个元素为1 另一个元素为2 则元素flex-grow值为2将是值为1的二倍

## Grid布局

display: grid;设置为网格模式

grid-template-column: 设置列数与像素宽度

grid-template-rows:设置行数与像素宽度

grid-column-gap: 为列增加空隙

grid-row-gap: 为行增加空隙

```css
.container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* 参数个数为列数 像素代表宽度 */
    grid-template-columns: 50px 50px 50px;
    /* auto 自动与内容适应 fr除去px与百分比(%)后按比例分配  */
    /*grid-template-columns: auto 50px 2fr 1fr 1fr;*/
    /* 为列增加空隙 */
    grid-column-gap: 10px;
    /* 为行增加空隙 */
    grid-row-gap: 10px;
    
}
```

gird-gap: 当参数只有一个时，为行列都添加空隙 两个参数 第一个为行间距 第二个为列间距

# 2020.5.14

## Grid布局

### justify-self

将元素中的内容在单元格中水平对齐 默认值为stretch

| justify-self | 默认值为stretch          |
| ------------ | ------------------------ |
| start        | 将内容对齐到单元格左侧   |
| center       | 将内容对齐到单元格的中心 |
| end          | 将内容对齐到单元格的右侧 |

![](F:\notes\随笔\images\justify-self.png)

将整个容器设置justify-items: center 

![](F:\notes\随笔\images\justify-items.png)

### align-self

将元素中的内容在单元格中垂直对齐 取值与上述justify-self相同

![](F:\notes\随笔\images\align-self.png)

容器设定align-items: center

![](F:\notes\随笔\images\align-items.png)

### grid-template-areas

将网格划分为区域模板

```css
/*
	顶部三个单元格合并为header
	底部三个单元格合并为footer
	中间两个区域advert content
*/
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

```css
/*将5设置为footer*/
.item5 {
    background: PaleGreen;
    grid-area: footer;
}
```

![](F:\notes\随笔\images\grid-area.png)

也可不适用模板

```css
/*起始行/起始列/终止行/终止列*/
item1 { grid-area: 1/1/2/4; }
```

![](F:\notes\随笔\images\不使用模板创建.png)

### repeat()

repeat()函数减少重复 repeat(重复次数，宽度)

```css
/*两种方式等价*/
grid-template-rows: 1fr 1fr 1fr;
grid-template-rows: repeat(3,1fr);
```

repeat自动填充

```css
/* 自动填充 如果填充所有元素大于容器宽度 则另起一行开始 */
repeat(auto-fill,minmax(60px,1fr));
```

![](F:\notes\随笔\images\自动填充.png)

auto-fit 自动填充元素 元素会自动拉伸

auto-fill 自动填充元素 没有元素后添加空元素

### minmax()

minmax()函数 限制元素大小 minmax(最小限度，最大限度)

```css
/*重复三列 最小90px 最大1fr*/
grid-template-columns: repeat(3,minmax(90px,1fr));
```

### 媒体查询响应式

```css
 @media (min-width: 300px){
     .container{
         grid-template-columns: auto 1fr;
         grid-template-rows: auto 1fr auto;
         /*左侧 上中下*/
         grid-template-areas:
             "advert header"
             "advert content"
             "advert footer";
     }
}
@media (min-width: 400px){
    .container{
        /*上中下*/
        grid-template-areas:
            "header header"
            "advert content"
            "footer footer";
    }
}
```



