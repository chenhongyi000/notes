function Person(){};
Person.prototype.name = '小明';
Person.prototype.age = 18;
var person1 = new Person();
//console.log(Object.keys(Person.prototype));
//person1.name = '小王';
//console.log(Object.keys(person1));;
console.log(Object.getOwnPropertyNames(Person.prototype));