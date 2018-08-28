//Promise.race(iterable)返回一个新的Promise，只要iterable中有一个Promise被Resolve/Reject了就Resolve/Reject;

var p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1);
    },1000);
});
var p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(1);
    },2000);
});

Promise.race([p1,p2]).then(function(m){
    console.log('resolve: '+m);    //resolve: 1
},function(n){
    console.log('reject: '+n);    //不执行
});
