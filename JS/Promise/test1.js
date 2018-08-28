//new Promise(function(resolve,reject){})返回了一个Promise对象;
var p=new Promise(function(resolve,reject){});
console.log(p instanceof Promise);    //true
