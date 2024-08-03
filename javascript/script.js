// variable->
//     var: global  --->  Gloabbalwe can allow value to re-render and re-assign
//     let : blocked --> only allow re-render , used widely
//     const: blocked  -> does not allow rerender and reassign

// console.log("javascript variables")
var a ="hanu"
// allow #re-render
a ="tech" 
console.log(a);

//  allow #re-assign
var a ="sakashi"
console.log(a);


let b ="tech"
// allow #re-render 
b="hanu"
console.log(b);

const  m ="hello"
// does not allow rerender and reassign m="hhh" 
console.log(m);

// datatype:
    // primitive : null, underdefined, string, number, bigint, boolean
    // non-premitive:
        //array, object


// let a1 = "45"
// console.log(typeof a1);


//boolean
// let  x = 70 ;
// let y = 90;
// console.log(x>y);


// BigInt
let num = 2342343245321233233341132n;
console.log(num); 

// if-else
let age = prompt("Enter your age");
if (age>=18) {
  console.log("can vote")
} else {
  console.log("under age, Doesnot have permission to vote")
}


