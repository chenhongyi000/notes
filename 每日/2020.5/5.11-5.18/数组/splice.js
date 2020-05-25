var arr = [1,2,3,4,5,6,7];
console.log(arr.splice(2,3));//返回[3,4,5],arr=[1,2,6,7]
console.log(arr.splice(2));//返回[6,7],arr=[1,2]
console.log(arr)
arr.splice(2,0,'a','b');
console.log(arr);