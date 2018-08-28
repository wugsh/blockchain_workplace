//new Promise的参数函数同步执行
var p=new Promise(function(resolve,reject){
   console.log(1);    //先
});

console.log(2);    //后
