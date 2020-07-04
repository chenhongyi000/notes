function SuperType(val){
    this.name  = val;
}
function SubType(){
    SuperType.call(this,"xiaoming");
    this.age = 18;
}
var instance1 = new SubType();
console.log(instance1.name);
console.log(instance1.age);