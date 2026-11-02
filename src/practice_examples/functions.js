function sayHello(name){
    console.log('Hello ${name}');
}
sayHello('Noor'); //print Hello Noor

function add(x, y){
    return x+y;
}
console.log(add(2, 3));
console.log(add("hello ", "world"));

//Functions as parameters
function sayHi(myfunc){
    console.log('Hi!');
    myFunc();
}
// setTimeout(sayHi, 2000);

// sayHello(function(){
//     console.log("Bye")
// });

function bye(){
    console.log("Bye")
}
sayHi(bye);

function lol(){
    console.log("lol")
}
sayHi(lol);
sayHi(function(){ //anonymous function
    console.log("lolololol")
})

//Functions as expressions
// let age = 39 + 2;
// function lolololol(){ 
//     console.log("lolololol");
//     }

let iLoveJs = function(){
    console.log("I love js");
}
iLoveJs();
let expressionAdd = function(x, y){
    return x + y;
}
expressionAdd(1,2);
//Arrow Functions
let addArrow = (x,y) =>{
    return x+y;
}
let addArrowShort = (x,y)=>x+y;
addArrow(1,2);

let squared = x => x*x;

function myFunction(func){
    func();
    console.log("done");
}
myFunction

