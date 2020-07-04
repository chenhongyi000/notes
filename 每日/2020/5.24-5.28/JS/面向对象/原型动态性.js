function Person(){};
var friend = new Person();
Person.prototype = {
    constructor: Person,
    name: 'xiaoming',
    age: 17,
    sayName: function(){
        console.log(this.name)
    }
}
friend.sayName();