var a = [1,2,3,4,5];
var b;
b = a.filter(function(value){
    return value%2 == 1;
})
console.log(b);