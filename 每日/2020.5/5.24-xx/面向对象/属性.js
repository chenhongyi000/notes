// var person = {
//     name: 'xiaoming'
// }
var person = {};
Object.defineProperty(person,'name',{
    writable: false,
    value: 'xiaoming'
})
person.name = 'wanggang'
console.log(person.name);