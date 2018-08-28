// throw也会导致Promise被reject;

var p = new Promise(function(resolve,reject){
    throw 1;    //保存栈信息，可以throw new Error(1);即e.message/e.stack
});

p.catch(function(v){
    console.log(v); //1
});
