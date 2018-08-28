/*
Promise.prototype.then返回的新Promise对象，
以参数函数的返回值作为新Promise的终结值，
如果不是Promise对象，则相当于返回Promise.resolve(...);
*/
var p = new Promise(function(resolve,reject){
    resolve(1);
});

p.then(function(v){
    console.log(v); //1
    return 2;    //相当于返回Promise.resolve(2);
}).then(function(v){
    console.log(v); //2
    return Promise.resolve(3);
}).then(function(v){
    console.log(v); //3
    return Promise.reject(4);
}).catch(function(v){
    console.log(v); //4
});
