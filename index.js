// this in Object Methods
let car = {
    color : "blue",
    brand : "BMW",
    start : function(){
        console.log(this);
    }
}
car.start();
// this in Regular Functions
function start(){
    console.log(this);
}
start();
//this in Arrow Functions
//Object Methods
let car1 = {
    color : "blue",
    brand : "BMW",
    start : ()=>{
        console.log(this);
    }
}
car1.start();
//Arrow Function with callback 
let car2 = {
    color : "black",
    brand : "BMW",
    start : function(){
        setTimeout(()=>{
            console.log(this);
        },1000);
    }
};
car2.start();
//this Constructor Functions
function cars(color,brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log(this);
    };
}
let car3 = new cars("red","BMW");
car3.start();

// Immutable
let x = 5;
let y = x;
y = 10;
console.log(x);
console.log(y);
//Mutable
let a = {value : 5};
console.log(a);
let b = a;
let c = {value : 20};
b.value = 10;
console.log(b);
console.log(c);
b = c;
console.log(a);
console.log(b);
console.log(c);
