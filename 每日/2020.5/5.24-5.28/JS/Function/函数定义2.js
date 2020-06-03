//函数定义
/*
sum(1,2);
sum2(1,2);
function sum(m,n){
    console.log(m+n);
}
var sum2 = function(m,n){
    console.log(m+n);
}
*/
function add(x){
    return x+10;
}
function sum(add,x){
    return add(x);
}
console.log(sum(add,2));