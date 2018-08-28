//Promise.prototype.then在resolve以后也能调用;
var p=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1);
    },1000);
});

p.then(function(v){
    console.log(v);
});

setTimeout(function(v){
    p.then(function(v){//可以调用
     console.log(v);
    });
},2000);
