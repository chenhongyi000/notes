function Person(){

}
Person.prototype.name = 'xiaoming';
Person.prototype.age = 16;
Person.prototype.sayName = function(){
    console.log(this.name);
}
//var person = new Person();
//console.log(Person.prototype);
//console.log(person.age);
//person.sayName();
var person1 = new Person();
var person2 = new Person();
//console.log(person1.sayName == person2.sayName);
//isPrototyoeOf()判断传入对象的[[Prototype]]指针是否指向本原型
//console.log(Person.prototype.isPrototypeOf(person1));
//Object.getPrototypeof()获取实例对象原型
//console.log(Object.getPrototypeOf(person1)==Person.prototype);

person1.name = 'wang';
//console.log(person1.name);//实例属性
//console.log(person2.name);//原型属性

//delete person1.name;
//console.log(person1.name);
console.log(person1.hasOwnProperty("name"));
