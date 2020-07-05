function Person(){};
Person.prototype = {
    name: 'wang',
    age: 20,
    job: 'teacher',
    sayName:function(){
        console.log(this.name);
    }
}
Object.defineProperty(Person.prototype,"constructor",{
    enumerable: false,
    value: Person
})
var person = new Person();
console.log(person.constructor);//[Function: Object]