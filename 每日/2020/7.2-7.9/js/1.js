//函数两种定义方式
//1.函数定义
/*
say();
function say(){
    console.log('hello')
}
*/

//2.函数表达式定义
/*
say2();
//抛出错误 变量提升 j将say2提升至未对say2赋值
var say2 = function(){
    console.log('hello2');
}
*/

//表面看一下例子没问题,实际上这是一种无效语法
//在这里推荐使用函数表达式
/*
if(condition){
    function say(){
        console.log('hello');
    }
}else {
    function say(){
        console.log('No');
    }
}
var say;
if(condition){
    say = function(){
        console.log('hello');
    }
}else {
    say = function(){
        console.log('No');
    }
}
say();
*/
