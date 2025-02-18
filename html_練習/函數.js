function hello(){
    console.log("hello world");

}

hello();

function hello_return(){
    return "hello";
}

let a = hello_return();
console.log(a)


function hello_with_params(name){
    console.log("hello"+" "+name);

}

let str = "sip";
hello_with_params(str);
hello_with_params("zzz");


let globl_var = "全局變量"

function local_var_function(){
    let local_var = "局部變量"
    console.log(globl_var);
    console.log(local_var);

}

local_var_function();

console.log(globl_var);
// console.log(local_var); 局部會報錯