# js算法学习

## 环境搭建

使用VSCode live-serve插件

**js引入**：在body标签关闭前引入js代码，这样会在加载脚本之前解析和显示html，有利于提升页面性能

## JS基础

### 数据类型

undefined 定义未赋值

null 变量没有值

原始数据类型：null undefined number bool string symbol

派生数据类型：javascript object 包括函数、数组、正则表达式

### true or false



| 数值类型  | 转换成布尔值                                               |
| --------- | ---------------------------------------------------------- |
| undefined | false                                                      |
| null      | false                                                      |
| 布尔值    | `true`是true，`false`是false                               |
| 数        | +0、-0和NAN都是false、其他的都是true                       |
| 字符串    | 如果字符串是空的(长度为0)就是false,其他都是true(length>=1) |
| 对象      | true                                                       |

 对象初始值为true

例：

```js
console.log(new String(""));//true
console.log(new Number("NAN"));//true
```

