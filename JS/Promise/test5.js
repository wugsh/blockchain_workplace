//Promise.prototype.then中的this指向window
var p=new Promise(function(resolve,reject){
    resolve(1);
});

p.then(function(v){
    console.log(this===window); //true
});
