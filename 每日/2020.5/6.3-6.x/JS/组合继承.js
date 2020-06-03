function SuperType(name){
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
}
function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
    console.log(this.age);
}
var instance1 = new SubType("xiaoming",18);
instance1.colors.push("black");
console.log(instance1.colors);

var instance2 = new SubType("xiaohong",17);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();