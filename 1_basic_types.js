"use strict";
// function add(n1:number, n2:number, showResult: boolean, resultPhrase: string){
//     let result = n1+n2;
//     if(showResult) 
//         console.log(resultPhrase+result);
//     else 
//         return n1+n2;
// }
// let num1 = +prompt("num1")! as number;
// let num2 = +prompt("num2")! as number;
// let showResult: boolean = true;
// let resultPhrase: string = "Result is: ";
// add(num1, num2, showResult, resultPhrase);
// let num;
// num = "hello";
// // OBJECTS
// const person:{
//     name: string;
//     age: number;
// } = {
//     name: "aryan",
//     age: 22
// };
// console.log(person.age);
// // ARRAYS
// // THIS IS AN ARRAY
// let arr: string[]; // An array of strings
// let arr: any[] ;
// let arr: (string | number | null | undefined | symbol | boolean)[];
// // THIS IS A TUPLE
// let arr: [string, number, boolean, symbol, null, undefined] ;
// // tuple is essentially a tuple because we have fixed length array and the type of value at each position is fixed.
// let x = Symbol("this is a symbol");
// arr = ["hello", 1, true, x, null, undefined];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// arr.push("another element");
// console.log(arr);
// // ENUMS
// // These are used to create autmoatically enumerated global constants.
// enum Role {ADMIN="hello", READ_WRITE=7, READ_ONLY="namste"}
// console.log(Role);
// console.log(Role.ADMIN);
// console.log(Role.READ_WRITE);
// console.log(Role.READ_ONLY);
// Role.ADMIN = "bye"; // ERROR
// // ANY
// let x: any;
// x = "hello";
// x = 23;
// x = true;
// x = undefined;
// x = null;
// x = Symbol("this is a symbol");
// x = [2, null, "yo"];
// // Union Type
// // used to combine multiple types.
// // We want the function to work for both strings and numbers
// function add(inp1: number | string, inp2: number | string)
// {
//     let result: number | string;
//     if(typeof inp1 === 'number' && typeof inp2 === "number"){
//         result = inp1 + inp2;
//     }
//     else{
//         result = inp1.toString()+inp2;
//     }
//     return result;
// }
// console.log(add("2", 4));
// // Literal Types
// // here since variables are constants, 
// // the implicit type of these variables are the exact values
// // hover over the following variables and check
// // Literal Types are exact values of type.
// const x = 8.71;
// const str = "hello";
// let y :  "hi" | "bye";
// y = "hi";
// // However explicit types of these variables are still the same
// console.log(typeof x);
// console.log(typeof str);
// console.log(y);
// // TYPE ALIASES / Custom Types
// // We can combine other types / literl types to make custom type
// type Combined = number | string;
// type Greeting = "hello" | "bye";
// let x: Combined;
// let y: Greeting;
// x = 1282;
// y = "bye";
// // // UNKNOWN Type
// // // the following code is VALID
// let x:unknown;
// x = 10;
// console.log(x)
// x = true;
// console.log(x)
// x = "hello";
// console.log(x)
// x = undefined;
// console.log(x)
// let firstName = "david";
// x = firstName;
// let flag = false;
// x = flag;
// console.log(x)
// // BUT the follwong code is INVALID
// let x: unknown;
// x = "hello";
// let firstName: string;
// // firstName = x; // ERROR, unkown is not asssignable to string
// // if x:any, then this would not lead to an error.
// // now it doesn't throw an error as we have explicitly checked the type of x
// if(typeof x === 'string'){
//     firstName=x;
// }
//# sourceMappingURL=1_basic_types.js.map