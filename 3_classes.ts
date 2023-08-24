// //// CLASSES

// // Defining Classes
// class Biscuit{
//     type: string;
//     inventor: string;
//     teamMembers: string[] = []; // Default value of a property

//     constructor(type: string, inventor: string){
//         this.inventor = inventor;
//         this.type = type;
//     }

//     // this has to be the first argument of the method.
//     about(this : Biscuit, opinion:string){
//         console.log(this.type);
//         console.log(opinion);
//     }
// }

// let parle = new Biscuit("bourbon", "Harry");
// // console.log(parle);

// // parle.about("very good");

// // since the structure of the object is absolutely the same as class Biscuit
// // so there is absolutely no error.
// let duplicateBiscuit = {type:"great", inventor:"harry", teamMembers: [], about: parle.about};
// duplicateBiscuit.about("farzi");


// // Acccess Modifiers

// class Biscuit{
//     private type: string;
//     inventor: string;

//     constructor(type: string, inventor: string){
//         this.inventor = inventor;
//         this.type = type;
//     }

//     updateType(type: string){
//         this.type = type;
//     }

//     // this has to be the first argument of the method.
//     about(this : Biscuit, opinion:string){
//         console.log(this.type);
//         console.log(opinion);
//     }
// }

// let parle = new Biscuit("bourbon", "Harry");

// // default access modifier is public.
// // // Accessing the type property directly trows us an error.
// // parle.type = "marie gold";
// // console.log(parle);

// parle.updateType("cream");
// console.log(parle);


// // Shorthand Initialization and "readonly"
// class Biscuit{

//     constructor(private type: string, public readonly inventor: string){
//         // initialised the property members of the object for this class.
//     }

//     updateType(type: string){
//         this.type = type;
//     }

//     // this has to be the first argument of the method.
//     about(this : Biscuit, opinion:string){
//         console.log(this.type);
//         console.log(opinion);
//     }
// }

// let parle = new Biscuit("bourbon", "Harry");
// console.log(parle);

// // parle.inventor = "alen"; /// INVALID, inventor is a readonly property


// INHERITANCE

// Abstract class // cannot be instantiated.
// Abstract calsse can have implemented function also.
abstract class DepartmentBlueprint{
    abstract party():void;
}

class Department extends DepartmentBlueprint{
    // static properties are inherited
    static count:number = 0;
    
    static printCount(){
        console.log(this.count);
        // console.log(this);
        // since we are inside static method, so we know that the this has been called by the class itself, so the values inside this is the entire class.
    }

    constructor(private name: string, protected employees: string[] = []){
        super();
    }

    // Implementing the abstract function provided by abstract parent class.
    party(){
        console.log("Lets PARTY!!!");
    }

    public printEmployees(){
        console.log(this.employees);
    }
}

class IT extends Department{
    public rating: number;

    get lastEmployee(){
        if(this.employees.length === 0) throw new Error("NO EMPLYEES !!!");
        return this.employees[this.employees.length-1];
    }
    
    set lastEmployee(employee: string){
        if(employee === "rajiv") throw new Error("RAJIV !!!");
        let lastIndex = this.employees.length-1;
        this.employees[lastIndex] = employee;
    }


    constructor(name: string, public about: string, rating: number , employees: string[] = []){
        super(name, employees);
        this.rating = rating;
    }
    addEmployee(employee: string){
        // this.count++; // this refers to the object / instance that called this function, thus a static variable cannot be accessed trhough this approach.
        IT.count++;

        this.employees.push(employee);
    }

    /// Function overriding
    printEmployees() {
        for(let emp of this.employees){
            console.log(emp.toUpperCase());
        }
    }

}

let it = new IT("Information Technology", "all about it infrastructure", 4.5);
console.log(IT.count);
// // it.printEmployees();
// // console.log(it.getLastEmployee);

it.addEmployee("ravi");
// // it.printEmployees();
// let result = it.lastEmployee
// console.log(result);
console.log(IT.count);


it.addEmployee("manoj");
// // it.printEmployees();
// console.log(it.lastEmployee);

// result = it.lastEmployee = "raghav";
// console.log(it.lastEmployee);
// console.log(result);
console.log(IT.count);
IT.printCount();

// console.log(it.count) // Static variable cannot be accessed by the instance of the class.






