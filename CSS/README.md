---

---

# CSS

CSS：层叠样式表(Cascading Style Sheets)

## 引入CSS

### 内联样式

内联样式的优先级是最高的

```html
<div style="width: 200px;height: 200px;background: red"></div>
```

### 内部样式

内部样式是写在style标签内部的样式

css文件内用<font color="0000ff">/*    */</font>注释

```css
/* div样式 */
div{
    width: 100px;
    height: 100px;
    background: blue;
}
```



### 外部样式

外部创建.css后缀结尾的css文件，再html文件内部使用link标签引入，href属性为css文件路径

```html
<link rel="stylesheet" href="./index.css">
```

```css
div {
    width: 300px;
    height: 300px;
    background: green;
}
```

## CSS选择器

### 常用选择器

标签选择器

```css
div {
    width: 100px;
    height: 100px;
    background: red;
}
```

id选择器

#+id名称 id值唯一，页面内不能重复

```css
/*选中div标签id值为div1的元素*/
#div1{
    width: 100px;
    height: 100px;
    background: blue;
}
```

类选择器(class选择器)

. + class名 

```html
<style>
    .text{
        color: red;
    }
</style>
<p class="text">这是一个p标签</p>

```

子代选择器

父元素>子元素

只可以选种父元素下的子元素

```css
ul>li{
	color: green;
}
```

后代选择器

可以选择父元素的子元素 以及子元素的子元素

```html
<style>
#wrap span{
    color: #e25783;
}
</style>
<div id="wrap">
    <span>
        123123
        <span>00000</span>
    </span>
</div>
```

分组选择器

可以选择多个元素添加相同属性

```css
#p1,#p2{
    color: green;
}
```

伪类选择器

用冒号(:)l来定义伪类选择器

a标签href属性值为# a标签不能进行跳转

```css
a:hover{
    color: green;
}
```



## CSS背景属性

background-color：背景颜色

```css
#wrap{
    width: 300px;
    height: 300px;
    background-color: #e92707;
}
```

background-image：背景图

```css
#container{
    width: 900px;
    height: 900px;
    /* 绝对路径相对路径均可 */
    background-image: url('https://images4.alphacoders.com/177/thumb-1920-17704.jpg');
}
```

background-repeat：背景图重复模式

​        no-repeat

​        repeat-x 水平重复

​        repeat-y 垂直重复

​        inherit 继承父元素

background-position：背景图位置设置

三种方式：

1. 像素
2. 百分比  
3. left top bottom right center

```css
background-position: 10px 20px;
/* 
background-position: top center;
background-position: 20% 30%;
*/

```

背景设置简写

```css
background: #000 url(...) center no-repeat;
```

## CSS文本属性

text-indent：文本缩进

```css
text-indent: 30px;
```

text-align：文本对齐

居左 居右 居中

```css
text-align: center;
/*right left center*/
```

word-spacing letter-spacing：单词间距与字母间距：

```css
/* 单词间距 */
word-spacing: -10px;
/* 字母间距 */
letter-spacing:-10px;
```

text-decoration：文本修饰

属性值

​	none overline：上划线 underline：下划线 line-through：贯穿线

```css
a{
    /*取消a标签默认样式*/
    text-decoration: none;
}
```

font-family：字体设置