
// //FUNCTIONS
// function add(n1: number, n2:number): void
// {
//     console.log(n1+n2);
//     return;
// }

// // console.log(add(2, 3));

// this throws and error but the value of result is 10;
// function combine(n1: number, n2: number): void{
//     console.log(n1+n2);
//     return 10;
// }

// let result = combine(2, 4);
// console.log(result);

// // FUNCTION TYPES
// let func0 : Function;
// // this represents a variable that can have a function 

// let func1 : () => number;
// // this represents a variable that can have a function with no parameter and returns a number

// let func2: (a: number, b: number) => void;
// // this represents a variable that can have a function with 2 number parameter and returns nothing

// let func3: (a: number, b: string) => boolean;
// // this represents a variable that can have a function with 1 number and string parameter and returns boolean

// func0 = add; //VALID
// // func1 = add; //INVALID;

// function returnZero(){return 0;}
// func1 = returnZero;

// // func2 = func0; // TSC is not sure iif func0 is assignale to func2, thus WARNING
// func2 = add;

// function returnTrue(str: string, x:number){
//     return true;
// }

// // func3 = returnTrue; // INVALID, because the order of arguments is different in the two.
// // Thus this throws an error during compilation.
// // console.log(func3);

// function returnFalse(x: number, str: string){
//     return false;
// }

// func3 = returnFalse; // VALID

// // CALLBACKS
// // no errors in the following code.
// function usingCallback(func: (a:number)=>void)
// {
//     let result = func(10);
//     console.log(result);
// }

// usingCallback((num)=>{
//     console.log(num);
//     return 100;
// });






