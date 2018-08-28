//Promise.prototype.then返回了一个新的Promise对象，而不是原来的Promise对象;

var p=new Promise(function(resolve,reject){});
var q=p.then(function(v){});

console.log(q===p); //false
