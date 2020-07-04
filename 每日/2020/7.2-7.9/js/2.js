//阶乘递归函数
var factorial = (function f(num){
    if(num <=1 ){
        return 1;
    }else{
        return num*f(num-1);
    }
});

console.log(factorial(4));