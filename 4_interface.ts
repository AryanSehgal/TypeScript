// /// INTERFACE
// // Used to define structure of an object / type of an object.

// interface Animal{
//     name: string;
//     greet(phrase: string): void;
// }

// // type Animal = {
// //     name: string;
// //     greet: (phrase: string)=> void;
// // }

// // // We can define the variable with both the types above
// let cat :Animal;
// cat = {
//     name: "pista",
//     // breed: "bull dog", // ERROR, because breed property is not defined in Animal interface
//     greet(message: string){
//         console.log(message);
//     }
// }
// console.log(cat);

// // Since Dog implements the Animal interface, it has to atleast satisfy the basic properties defined in Animal interface.
// // the same results can also be achieved using custom type Animal
// class Dog implements Animal{
//     breed: string;

//     constructor(public name: string, breed:string){
//         this.breed = breed;
//     }

//     greet(phrase: string) {
//         console.log(phrase);
//     }

//     updateBreed(breed: string){
//         this.breed = breed;
//     }
// }

// let dog = new Dog("tommy", "bull dog");
// console.log(dog);

// // since dog2 is of the type Animal, and Dog class implements Animal, so everything is good.
// // the same results can be achieveed with custom type Animal
// let dog2 : Animal;
// dog2 = new Dog("harry", "pug");
// console.log(dog2);

// // ERROR! dog2 is of the Animal type, so it can only access the variables and methods available in Animal.
// // dog2.updateBreed("tzu"); 


// // EXTENDING INTERFACES

// // https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript
// // the keyword "extends" can be used only with classes and interfaces

// // interface Greeting{
// //     greet(phrase: string):void;
// // }

// type Greeting = {
//     greet(phrase: string):void;
// }

// // Dog interface can also extend custom type Greeting 
// interface Dog extends Greeting{
//     breed: string;
// }
// // This way we can have 2 interfaces, one for Greeting only and one for Dog which extends Greeting

// // // an alternate for the above Greeting interface
// //type Dog = {breed: string;} & Greeting;

// let dog:Dog;
// dog = {
//     breed: "pug",
//     greet(phrase: string){
//         console.log(phrase);
//     }
// };

// console.log(dog);


// // Interfaces as Function Types. 

// // type AddFunc = (a: number, b: number) => number;

// // this is an alternative or above type
// interface AddFunc{
//     (a:number, b:number):number;
// }
// // it is better to use custom tyoes for this case.

// let add: AddFunc = (a:number, b:number) => a+b;
// console.log(add(2, 3));










