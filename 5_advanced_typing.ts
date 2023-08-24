// // Advanced Typing Concepts

// type Numeric = number | boolean;
// type Addable = string | number;

// type Universal = Numeric & Addable;
// // Here Universal can only be number, because that is at the intersection of the two.

// type Animal = {
//     name: string,
//     code: string,
//     age: number
// } 

// type Alien = {
//     name: string,
//     code: number,
//     planet: string
// }

// type Combination = Alien & Animal;

// let obj: Combination;

// obj = {
//     name: "tommy",
//     age: 5,
//     planet: "pluto",
//     // Both these statements throw an error 
//     // code: "32"
//     // code: 32
//     // code implicitly takes type "never", as there is a conflicting clash between the two types.
// }

// // The same can bedone with interfaces
// interface Animal {
//     name: string,
//     age: number
// } 

// interface Alien {
//     name: string,
//     planet: string
// }

// // these are the two alternatives to achieve the same thing.
// // type Combined = Animal & Alien;
// interface Combined extends Animal, Alien{}

// let obj: Combined;

// obj = {
//     name: "sam", 
//     planet: "pluto", 
//     age: 23
// };


// // Type Guards
// // checking the type before assuming the type of that object.
// interface Animal {
//     name: string,
//     age: number
// } 

// interface Alien {
//     name: string,
//     planet: string
// }

// type UnknownType = Animal | Alien;

// let jaado: Alien = {
//     name: "jaado", 
//     planet: "mars"
// };

// let tommy: Animal = {
//     name: "jaado", 
//     age: 12
// };

// function printInfo(obj: UnknownType){
//     console.log(typeof obj); // This outputs "object"
//     // console.log(obj.planet); 
//     // here compiler is not certain if it has planet property or not.
//     // we cannot even check if obj is Alien using typeof.
    
//     if("planet" in obj){
//         console.log(obj.planet);
//         // now we ca be certain that planet property exists in obj
//     }

//     // Alternatively, we could have done this if Alien was a class.
//     // instanceof is a part of vanilla JS.
//     // if(obj instanceof Alien){
//     //     console.log(obj.planet);
//     // }

// }

// printInfo(jaado);
// printInfo(tommy);

// // // Discriminated union
// // used to type guard bewteen various types used in a union type, by using a common lteral type property.

// interface Animal {
//     type: "animal", // This is a literal type
//     name: string,
//     age: number
// } 

// interface Alien {
//     type: "alien", // This is a literal type
//     name: string,
//     planet: string
// }

// let jaado: Alien = {
//     type: "alien",
//     name: "jaado", 
//     planet: "mars"
// };

// let tommy: Animal = {
//     type: "animal",
//     name: "tommy", 
//     age: 12
// };

// type UnknownType = Animal | Alien;

// function printInfo(obj: UnknownType){
//     let result;
//     switch (obj.type){
//         case "alien":
//             result = obj.planet;
//             break;
//         case "animal":
//             result = obj.age;
//             break;
//     }

//     console.log(result);
// }

// printInfo(jaado);
// printInfo(tommy);




















