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



