/*
Promise.all(iterable)返回一个新的Promise，
它等所有的iterable中的Promise都Resolve后就Resolve，
只要有一个Reject就Reject。

如果iterable中某一个不是Promise，则使用Promise.resolve(...)转换为Promise;

*/
var p = Promise.resolve(1);
Promise.all([true,p]).then(function(v){
    console.log(JSON.stringify(v)); //[true, 1]
});

var p1 = Promise.resolve(1);
var p2 = Promise.reject(2);
Promise.all([true,p1,p2]).then(function(m){
    console.log('resolve: '+ JSON.stringify(m));    //不执行
},function(n){
    console.log('reject: '+JSON.stringify(n));    //reject: 2
});
