//Promise.resolve(value/promise/thenable)返回一个以参数为终结值的Promise对象;

//value:

var p1 = Promise.resolve(1);
p1.then(function(v){
    console.log(v); //1
});


//Promise：
var p2 = Promise.resolve(new Promise(function(resolve,reject){
    resolve(1);
}));
p2.then(function(v){
    console.log(v); //1
});


//thenable：
var p3 = Promise.resolve({
    then:function(resolve,reject){
        resolve(1);
    }
});
p3.then(function(v){
    console.log(v); //1
});
