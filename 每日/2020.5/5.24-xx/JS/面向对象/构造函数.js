function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }

}
var person1 = new Person('小明',16,'程序员');
var person2 = new Person('小红',17,'老师');
//person1.sayName();
//console.log(person2.age);
//console.log(person1.constructor == Person);
//console.log(person2.constructor);
console.log(person1.sayName==person2.sayName);