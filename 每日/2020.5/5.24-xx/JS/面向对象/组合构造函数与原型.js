function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby","Court"];
};
Person.prototype = {
    constructor: Person,
    sayName: function(){
        console.log(this.name);
    }
}
var person1 = new Person("xiaoming",19,"teacher");
var person2 = new Person("xiaohong",26,"Doctor");
person1.friends.push("xiaowang");
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);
console.log(person1.sayName === person2.sayName);
