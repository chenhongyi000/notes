function filter_list(l) {
    // Return a new array with the strings filtered out
    let arr = [];
    for(let i = 0;i<l.length;i++){
      if(typeof(l[i]) === "number" && l[i]>0){
        //arr.push(l[i]);
        console.log(l[i])
        arr.push(l[i]);
        console.log(arr);
      }
    }
      
}
filter_list([1,2,'aasf','1','123',123])