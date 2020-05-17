var arr = [1,2,3,4,5];
var sum = 0;
arr.forEach(function(value,i,a){
    sum +=value
})
console.log(sum);
arr.forEach(function(value,i,a){
    a[i] = value+1;
})
console.log(arr);