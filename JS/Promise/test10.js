//Promise.reject(reason);

var p = Promise.reject(1);

p.then(function(m) {
    console.log(m);    //不执行
},function(n){
    console.log(n); //1
});

p.catch(function(v) {
    console.log(v); //1
});
