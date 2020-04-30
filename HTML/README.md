# HTML基本结构

## 标签

**DOCTYPE**：声明文档类型，浏览器根据版本渲染页面

```html
<!DOCTYPE html>
```

**HTML**：根元素

```html
<html lang="en"></html>
```

**head**：头部标签  当前页面配置项

**meta** ：提供有关页面的元信息

```html
<!-- 字符编码 gbk gb2312 utf-8 -->
<meta charset="UTF-8">
<!-- 移动端开发 响应式 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- ie浏览器 ie8以上支持 用最高的版本渲染当前页面-->
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- 关键字 搜索引擎使用 -->
<meta name="keywords" content="xxx">
<!-- 网站的描述 搜索引擎使用的 -->
<meta name="description" content="xxx">
<!-- 标题 当前网页的标题 -->
<title>网页标题</title>
```

**h1-h6**：标题 由大到小

```html
<!-- h1~h6 标题 -->
<h1>标题1</h1>
<h2>标题2</h2>
<h3>标题3</h3>
<h4>标题4</h4>
<h5>标题5</h5>
<h6>标题6</h6>
```

**p**：段落 上下默认有间距

```html
<p>这是第一段文字</p>
<p>这是第二段文字</p>
```

**br**：强制换行

```html
<p>这是第一段<br/>文字</p>
```

**strong**：加粗

```html
<p><strong>这是第一段文字</strong></p>
```

**img**：

- src：图片地址 绝对路径、相对路径
- alt：对图片解释说明 图片加载不出来时展示
  - png：透明图
  - jpeg jpg：
  - gif：动图

```html
<!-绝对路径-->
<img src="www.xxx.com/images/xx.png" alt="">
<!-相对路径-->
<img src="../img/1/png" alt="">
```

**a**：超链接 

- href：跳转链接
- target：属性为_blank 新开启一个页面

```html
<!-当前页面跳转-->
<a href="http://www.baidu.com">百度一下</a>
<!--跳转到重新打开网站-->
<a href="http://www.baidu.com" target="_blank">百度一下</a>
```

**ul**：无序列表 必须与**li**一起

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
```

**ol**：有序列表

```html
<ol>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ol>
```

**form**：表单元素 action属性：表单提交动作

**input**：输入控件

```html
<form>
    <!--输入框-->
    <input type="text">
    <!--密码框-->
    <input type="password">
    <!--单选框
		name值相同 为一组
	-->
    <input name="123" type=radio>
    <input name="123" type="radio">
    <!-- 复选框
	 checked属性 默认选中
	-->
    1<input type="checkbox">
    2<input type="checkbox" checked>
    3<input type="checkbox">
    <!-- 提交按钮 -->
    <input type="submit">
</form>
```

**label**：文字与单选框绑定 for属性的值与input id相同

```html
<label for="input1">
    haha:<input id="input1" type="radio">
</label>
```

**select**：下拉列表

```html
<!-- 下拉列表 -->
<select name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
</select>
```

**button**：按钮

```html
<button>按钮</button>
```



**textarea**：文本域

```html
<!--
	cols：列 多少字符元素宽度
	rows：行 多少行
-->
<textarea name="" id="" cols="30" rows="10"></textarea>
```

table：表格

```html
<table border="1">
    <!-tr 行 td 列-->
    <tr>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td>3</td>
        <td>4</td>
    </tr>
</table>
```

i：斜体 通常用语icon引入



****

## 块级元素与行级元素

### 块级元素

块级元素一个占一行

嵌套块级元素、行级元素

常见块级元素

- div
- h1~h6
- p
- ul
- li
- ol

### 行级元素(行内元素)

行级元素多个占一行

常见行级元素

- a
- span
- label