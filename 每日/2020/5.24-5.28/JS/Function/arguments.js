/*
function factorial(num){
    if(num<=1){
        return 1;
    } else{
        //return num*factorial(num-1);
        return num*arguments.callee(num-1);
    }
}
var trueFactorial = factorial;
factorial = function(){
    return 0;
}
console.log(trueFactorial(5));
*/
var a = function(){
    b();
}
var b = function(){
    console.log(arguments.callee.caller);
}
a();