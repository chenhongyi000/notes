function Person(){}
Person.prototype = {
    constructor: Person,
    name: 'xiaoming',
    age: 17,
    friends: ['xiaohong','xiaowang'],
    sayName: function(){
        console.log(this.name);
    }
}
var person1 = new Person();
var person2 = new Person();
person1.friends.push('lihua');
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);