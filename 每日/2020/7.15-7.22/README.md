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

使用replaceChild()方法来移除节点，接受两个参数：要插入节点和要替换节点

```js

```

