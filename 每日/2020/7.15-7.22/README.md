# 2020.7.15

## DOM

### 节点层次

#### Node类型

DOM1级定义了Node接口，该接口将由DOM中的所有节点类型实现。

除IE，其他浏览器都可以访问这个类型

JS中的所有节点类型都继承自Node类型，所有节点类型都共享着相同的基本属性和方法

##### 确定节点类型

```js
//IE没有公开NODE构造函数，此方法对于IE无效
if(someNode.nodeType == Node.ELEMENT_NODE){
    console.log("Node is an element");
}
//确保跨浏览器兼容性 nodeType与1比较
if(someNode.nodeType == 1){
    console.log("Node is an element");
}
```

##### nodeName与nodeValue

这两个值用来了解节点信息，两个属性值完全取决于节点类型

使用之前最好检测节点类型

对于元素节点,nodeName保存的是标签名，nodeValue的值始终为null

```js
//首先判断是否是一个元素 是，保存nodeName值
if(someNode.nodeType == 1){
    value = someNode.nodeName;
}
```

#### 节点关系

每个节点都childNodes属性，其中保存着NodeList对象。NodeList是一种类数组。这个对象也存在length属性，但不是Array的实例。

如何保存NodeList中的节点

```js
//第一种方法和数组相近，受到青睐
var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNode.item(1);
var count = someNode.childNodes.length;
```

也可将NodeList转换为数组

```js
//IE8以及更早版本无效
//IE8以及更早版本将NodeList作为COM对象
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);
```

IE8以及更早版本必须手动枚举所有成员
以下代码在所有浏览器中都可以运行

```js
function convertToArray(nodes){
    var array = null;
    try{
        //针对非IE
        array = Array.prototype.slice.call(nodes,0);
    }
    catch(ex){
        array = new Array();
        for(var i=0,len=nodes.length;i<len;i++){
            array.push(node[i]);
        }
    }
}
```

每个节点都有一个**parentNode**属性，该属性指向文档树中的父节点。包含在childNodes列表中的节点都具有相同的父节点。因此他们的parentNode属性都指向同一个节点。

包含在childNodes列表中的每个节点都是同胞节点。每个节点包含**previousSibling**和**nextSibling**属性

列表中**第一个节点**的previousSibling属性值为`null`

列表中**最后一个节点**的nextSibling属性值为`null`

如果列表中只含有一个节点，那么它这两个属性值均为null

父节点的firstChild和lastChild的值分别为列表中第一个值和最后一个值

即**someNode.firstChild**等于`someNode.childNodes[0]`,

**someNode.lastChild**等于**someNode.childNodes[someNode,childNodes.length-1]**

若只有一个节点，则firstChild和lastChild指向同一节点

若没有节点，则firstChild和lastChild均为`null`



所有节点都有的最后一个属性是owerDocument，该属性指向表示整个文档的文档节点，任何节点都不能同时存在两个或更多个文档中。

#### 操作节点

##### 插入节点



关系指针都是只读的，所以DOM提供了一些操作节点的方法。最常用的方法是appendChild()，用于向childNodes列表的末尾添加一个节点。添加节点后，childNodes的新增节点、父节点及以前的最后的一个子节点的关系指针都会相应得得到更新。更新完成后，appendChild()返回新增的节点。

```js
var returnedNode = someNode.appendChild(newNode);
console.log(returnedNode == newNode)//true
console.log(someNode.lastChild == newNode)//true
```

若节点已成为文档的一部分，那么结果是把该节点原位置与添加位置转换。但任何*DOM*节点不能出现在同一文档的多个位置。如果在调用`appendChild()`时传入了父节点的第一个节点，该节点成为了父节点的最后一个节点。

```js
var returnedNode = someNode.appendChild(someNode.firstChild);
console.log(returnedNode == someNode.firstChild);//false
console.log(returnedNode == some.lastChild);//true
```

将节点插入到指定位置，调用`insertBefore()`。该方法第一个参数为节点，第二个参数为参考位置。调用方法后，将节点作为参考节点的同胞节点(`previousSibling`)插入到前面。返回值为想插入节点。如果参考节点为`null`，则方法与`appendChild()`执行相同操作。

```js
//插入后成为最后一个子节点
var returnedNode = someNode.insertBefore(newNode);
console.log(returnedNode == newNode);//true
console.log(newNode == someNode.firstChild)//true
//插入后成为第一个子节点

var returnedNode = someNode.insertBefore(newNode,someNode.lastChild);
console.log(newNode == someNode.childNodes(someNode.childNodes.length-2))//true

```

##### 移除节点

使用`replaceChild()`方法来移除节点，接受两个参数：要插入节点和要替换节点

要替换节点由此方法返回并从文档中被移除，同时由要插入节点替代。

```js
//替换第一个子节点
var returnedNode = someNode.replaceChild(newNode,someNode.firstChild);
//替换最后一个子节点
returnedNode = someNode.replaceChild(newNode,someNode.lastChild);
```

也可通过`removChild()`方法移除节点，移除节点仍然为文档所由有，但在文档中没有自己的位置

>以上涉及四种方法必须先取得父节点(使用parentNode属性)。另注意，不是所有类型的节点都有子节点，如果在不支持子节点的节点上调用方法，将会导致错误发生

#### 其他方法

所有节点都具有的两个方法。一个是`cloneNode()`：用于创建调用这个方法的节点的一个完全相同的副本。`cloneNode()`方法接受到 一个布尔值参数，表示是否执行深复制。参数为true时，执行深复制，复制节点以及其整个子节点树；参数为false时，执行浅复制，只复制节点本身。复制后返回的节点副本属于文档所有，但并没有为它指定父节点。所以此节点为“孤儿节点”。除非通过`appendChild()`、`insertBefore()`或`replaceChild()`将它添加到文档。

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
```

将ul元素保存在变量myList，就可以看出cloneNode()两种模式

```js
var deepList = myList.cloneNode(true);
console.log(deepList.childNodes.length);//3 (IE<9) 或 7 (其他浏览器)
var shallowList = myList.cloneNode(false);
console.log(shallowList.childNodes.length)//0
```

deepList为myList执行深复制得到的副本。所以deepList中包含三个列表项。

shallowList中保存着 对myList执行浅复制得到的副本，因此不包含子节点。

deepList.childNode.length中的差异主要是因为IE8及更早版本与其他浏览器处理空白字符的方式不一样。IE9之前的版本不会为空白付创造节点。

>cloneNode方法不会复制添加到DOM节点的Javascript属性。这个方法只能复制特性、(在明确制定的情况下也复制)子节点，其他一切都不会复制。IE在此存在一个BUG，它会复制事件处理程序，建议在复制之前最好先一处事件处理程序

normalize()方法，这个方法唯一的作用是处理文档树中的文本节点。由于解析器的实现或DOM操作等原因，就会在该节点的后代中查找上述两种情况。如果找到空文本节点，则删除；如果找到相邻的文本节点，则将他们合并为一个文本节点。

### Document

js通过Document类型表示文档。在浏览器中，document对象是HTMLDocument(继承自Document类型)的一个实例，表示整个HTML页面。而且，document对象是window对象的一个属性，可以将其作为全局对象访问。Document节点具有下列特征：

1. nodeType的值为9
2. nodeName的值为"#document"
3. nodeValue的值为null
4. parentNode的值为null
5. ownerDocument的值为null
6. 其子节点可能是一个DocumentType(最多一个)、Element(最多一个)、ProcessingInstruction或Comment

#### 文档的子节点

访问子节点的快捷方式。第一个是documentElement属性，该属性始终指向HTML页面的\<html\>元素。另一个就是通过childNodes列表访问文档元素，但通过documentElement属性则能快捷、更直接地访问该元素。

```html
<html>
    <body>
        
    </body>
</html>
```

这个页面在经过浏览器解析后，其文档中只包含一个子节点，即\<html\>元素。可以通过documentElement或childNode列表来访问这个元素。

```js
var html = ducument.documentElement;//取得对<html>的引用
console.log(html === document.childNodes[0]);//true
console.log(html === ducument.firstNode);//true
```

作为HTMLDocument的实例，document对象还有body属性，直接指向\<body\>元素。

```js
var body = document.body;//取得对<body>的引用
```

所有浏览器都支持document.documentElement和document.body属性。

Document的另一个可能的子节点是DocumentType。通常\<!DOCTYPE\>标签看成一个与文档其他部分不同的实体，可以通过doctype属性(在浏览器中是document.doctype)来访问它的信息。

```js
var doctype = document.doctype;//取得对<!DOCTYPE>的引用
```

