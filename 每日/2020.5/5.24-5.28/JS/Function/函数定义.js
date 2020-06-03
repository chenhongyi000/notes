var sum = function(m,n){
    return m+n;
}
console.log(sum(1,2));
var anotherSum = sum;
console.log(sum(3,4));
function change(m,n){
    var t;
    t = m;
    m = n;
    n = t;
    console.log(m,n);
}
change(6,7);