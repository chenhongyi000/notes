var arr1 = [1,2,3];
arr1.push(4);
console.log(arr1);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);

var removeFromArr1;
removeFromArr1 = arr1.pop();
console.log(removeFromArr1);
console.log(arr1);

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);
console.log(removedFromOurArray);

var ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy");
console.log(ourArray);