// variable->
//     var: global  --->  Gloabbalwe can allow value to re-render and re-assign
//     let : blocked --> only allow re-render , used widely
//     const: blocked  -> does not allow rerender and reassign

// // console.log("javascript variables")
// var a ="hanu"
// // allow #re-render
// a ="tech" 
// console.log(a);

// //  allow #re-assign
// var a ="sakashi"
// console.log(a);

// there is one id and many class

// let b ="tech"
// // allow #re-render 
// b="hanu"
// console.log(b);

// const  m ="hello"
// // does not allow rerender and reassign m="hhh" 
// console.log(m);

// // datatype:
//     // primitive : null, underdefined, string, number, bigint, boolean
//     // non-premitive:
//         //array, object


// // let a1 = "45"
// // console.log(typeof a1);


// //boolean
// // let  x = 70 ;
// // let y = 90;
// // console.log(x>y);


// // BigInt
// let num = 2342343245321233233341132n;
// console.log(num); 

// // if-else
// // let age = prompt("Enter your age");
// // if (age>=18) {
// //   console.log("can vote")
// // } else {
// //   console.log("under age, Doesnot have permission to vote")
// // }

// // Question1:
// // write a javascript program which can calculate a bill of meter for the given range of units
// // Units: 0-200 Price: 1.50
// // Units: 200-400 Price: 2
// // Units: 400-600 Price : 3
// // Units: 600 Price :5

// // let units=prompt("Enter the Units");
// // let price=0;
// // if (units>=0 && units<200){
// //   price=1.5*units;
// // }else if( units>=200 && units<400){
// //   price=2*units;
// // } else if( units>=400 && units<600){
// //   price=3*units;
// // } else{
// //   price=5*units;
// // }
// // console.log("price=",price)


// // Question2:
// // Write a Java script program which can calculate the total percentage of 5 students and display the result according to the percentage

// // 60-70: 3rd 
// // 70-80: 2nd
// // 80-100:first


// // for(let i=1;i<=5;i++){
// //   let percent=prompt("Enter percentage of "+i+"student");
// //   if (percent>=60 && percent<70){
// //     v="rank=3rd";
// //   }else if (percent>=70 && percent<80){
// //     v="rank=2th";
// //   }else if (percent>=80 && percent<100){
// //     v="rank=1st";
// //   }else{
// //     v="rank=none"
// //   }
// //   console.log(i+"student with "+percent+ " percentage "+v)
// // }


// // question 3: 
// // write a javascrpt program which can find the maximum number between 3 number a=74,b=24,c=78

// let a1=104;
// let b1=24;
// let c1=78;
// if (a1>b1 && a1>c1){
//   console.log("a is maximumn number "+a1)
// }else if(b1>c1 && b1>a1){
//   console.log("b is maximumn number "+b1)
// }else if (c1>b1 && c1>a1){
//   console.log("c is maximumn number "+c1)
// }

// // switch
// // n=3
// // switch(n){
// //   case 1: console.log("Sunday");
// //   break;
// //   case 2: console.log("Monday");
// //   break;
// //   case 3: console.log("Tuesday");
// //   break;
// //   case 4: console.log("Wednesday");
// //   break;
// //   case 5: console.log("Thusday");
// //   break;
// //   case 6: console.log("Friday");
// //   break;
// //   case 7: console.log("Saturday");
// //   break;
// //   default: console.log("You have enter the wrong value")
// // }

// // #question:
// // print month in javascript

// let month=4;
// switch(month){
//   case 1:console.log("Janurary");
//   break;
//   case 2: console.log("Febury");
//   break;
//   case 3: console.log("March");
//   break;
//   case 4: console.log("April");
//   break;
//   case 5:console.log("May");
//   break;
//   case 6: console.log("June");
//   break;
//   case 7: console.log("July");
//   break;
//   case 8: console.log("August");
//   break;
//   case 9:console.log("September");
//   break;
//   case 10: console.log("October");
//   break;
//   case 11: console.log("November");
//   break;
//   case 12: console.log("December");
//   break;
//   default: console.log("you have given wrong number")
// }

// #question : using switch find the largest of five number
// let a4=10;
// let b4=3;
// let c=5;
// let d=8;
// let e=1;
// let largest
// switch(true){
//   case (a4>b4 && a4>c && a4>d && a4>e): largest=a4;
//   console.log(largest);
//   break;

//   case (b4>a4 && b4>c && b4>d && b4>e): largest=b4;
//   console.log(largest);
//   break;

//   case (c>a4 && c>b4 && c>d && c>e): largest=c;
//   console.log(largest);
//   break;

//   case (d>a4 && d>b4 && d>c && d>e): largest=d;
//   console.log(largest);
//   break;

//   case (e>a4 && e>b4 && e>c && e>d): largest=e;
//   console.log(largest);
//   break;
//   default: console.log("wrong");
// }

// FOR -LOOP
// let sum=0
// for(let a=0;a<=10;a++){
//   sum+=a;
//   console.log(a)
// }
// console.log("total=",sum)

// FOR WHILE-LOOP
// let sum=0
// let a=0;
// while(a<10){
//   sum+=a;
//   console.log(a)
//   a+=1;
// }
// console.log("total=",sum)


// // for do-while
// let sum=0
// let a=0;

// do {
//   sum+=a;
//   console.log(a)
//   a+=1;
// } while (a<10);

// console.log("total=",sum)

// ARRAY -- Aug 8th 2024--->

let student=['sakshi','swarna','sanjay','gaurav','ruchi','renne']
// for (let i=0;i<student.length;i++){
//   console.log(student[i])
// }

// array functions--> push(add) and pop(remove) form the end of array
                  // --> shift(remove) and unshift(add) from the start of array
                  // =>   splice(starting_idx,ending_idx,element added) to add in between of array.
student.push("harsh") 
student.pop()
student.shift()
student.unshift('hanumant') 
student.splice(1,3,'sa','ss','werwr',2,3)
console.log(student);




// WHILE-LOOP
// let i=0;
// while (i<student.length){
//   console.log(student[i])
//   i+=1
// }

// DO-WHILE
// let i=0;
// do {
//   console.log(student[i])
//   i+=1
// } while (i<student.length);

// mayank :object-< how value target
// minaj: objects
// nihal: DOM styling, elemenet segretation