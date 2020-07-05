// var say;
// window.say = "hello";
// var obj = {say:"helloooo"};
// function sayHello(){
//     console.log(this.say)
// }
// sayHello();
var a = "window.a";  //全局变量
function f () {  //全局函数
    console.log(a);
}
console.log(window.a);  //返回字符串“window.a”
window.f();  //返回字符串“window.a”
