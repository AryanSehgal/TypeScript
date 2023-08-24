// // GENERICS
// it is a concept specific to TS, there exists no equivalent concept in JS.

// // Built in Generic Types
// let arr: Array<number> = [1, 2, 3];
// let arr2: Array<string> = ["a", "b", "c"];
// let arr3: Array<boolean> = [true, false];
// // Array is a generic type
// // generic type is a type that is generic. 
// // It can be used with various other types, like the one shown above.
// // Generics the types that are supported with multiple types.

// // Creating Generic Functions
// function merge<T, U>(str:T, num:U){
//     return {
//         str, 
//         num
//     };
// }

// console.log(merge("hello", 20));
// // here the vlaue of T and U is being determined dynamically.

// // console.log(merge<number, boolean>(200, true));
// // here we are explictly mentioning the types.


// // Constraints on generic types

// // here we are constraining  that the generic types T and U should be objects
// function merge<T extends object, U extends object>(str:T, num:U){
//     return {
//         str, 
//         num
//     };
// }
// console.log(merge({greeting: "hello"}, {luckyNum: 20}));

// function merge2<T extends string, U extends object>(str:T, num:U){
//     return {
//         str, 
//         num
//     };
// }
// console.log(merge2("hello", {luckyNum: 20}));

// // we can even constraint it to our own custom types
// function merge3<T extends string| number, U >(str:T, num:U){
//     return {
//         str, 
//         num
//     };
// }
// console.log(merge3("hello", true));
// console.log(merge3(321, true));

// // Extending a genertic type from a custom type

// interface Lengthy{
//     length: number;
// }

// function greet<T extends Lengthy>(phrase: T){
//     if(phrase.length === 1){
//         console.log("not long enough");
//     }else{
//         console.log(phrase);
//     }
// }

// greet("h");
// greet("hey");

// // keyof Constraint

// // without "U extends keyof T", TS can't be sure that U is a key of T
// function checkString<T extends object, U extends keyof T>(obj:T, key:U){
//     if(typeof obj[key] === 'string') return obj[key];
//     return "Not a string!!!";
// }
// console.log(checkString({greeting: 123}, "greeting"));

// // GENERIC CLASSES

// class CustomArray<T>{
    
//     // Two alternate methods to achieve the same thing.
//     // private arr : Array<T> = [];
//     private arr: T[] = [];

//     addElem(elem:T){
//         this.arr.push(elem);
//     }

//     findLength(){
//         return this.arr.length;
//     }

//     print(){
//         console.log(this.arr);
//     }

//     lastElem(){
//         return this.arr[this.findLength()-1];
//     }
// }

// let arr = new CustomArray<number>();
// arr.addElem(10);
// arr.addElem(20);
// arr.print();

// console.log(arr.lastElem());
// console.log(arr.findLength());


// // Builting Generic Utility Types

// // Partial

// interface Details{
//     name: string;
//     age: number;
// }


// // This leads to an error has obj does not staisfy the type Details, at the time of declaration. 
// // let obj: Details = {};
// // obj.name = "raju";
// // obj.age = 16;
// // console.log(obj);

// // this makes all the properties of obj as optional.
// let obj: Partial<Details> = {};
// obj.name = "raju";
// obj.age = 16;
// console.log(obj);


// // IMPLEMENTING PARTIAL AND PICK

// PICK
type PICK<T, U extends keyof T> = {
  [K in U]: T[K];
};

type Person = {
  name: String;
  age: Number;
  isTall: Boolean;
}

type PersonInfo = PICK<Person, 'name'|'age'>;

let obj2: PersonInfo;
obj2 = {name: "rahul", age:3};

// PARTIAL
type PARTIAL<T> = {
  [K in keyof T] ?: T[K];
}

type PersonInfoPartial = PARTIAL<PersonInfo>;
let obj3: PersonInfoPartial = {name:"ravi"};





















