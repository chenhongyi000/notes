var arr1 = [1,2,3,4,5];
console.log(arr1.every(function(x){return x<10;}));
console.log(arr1.every(function(x){return x%2==0}));
console.log(arr1.some(function(x){return x%2 == 0}));