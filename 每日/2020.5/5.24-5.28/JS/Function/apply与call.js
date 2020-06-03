function add(m,n){
    console.log(m+n);
    console.log(this);
}
add(1,2);
//add.apply(add,[1,2]);
add.call(add,1,2);