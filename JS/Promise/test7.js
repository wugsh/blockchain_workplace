//Promise.prototype.then(onFulfilled,onRejected)与Promise.prototype.catch(onRejected)

var p = new Promise(function(resolve,reject){
    reject(1);
});

p.then(function(m){
    console.log(m);    //不执行
},function(n){
    console.log(n); //1
});

p.catch(function(v){
    console.log(v); //1
});
