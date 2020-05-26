function Person(){};
Person.prototype.name = '小明';
Person.prototype.age = 18;
var person1 = new Person();
var person2 = new Person();
person1.name = '小王';
console.log(person1.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));