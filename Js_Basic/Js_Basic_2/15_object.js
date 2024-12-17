// Singleton

// Object Literals
// Object.create //Constructor Method 
const user1 = {
    name : "Rohit",
    age : 21,
    Num : 9891,
    isLoggedIn : false,
    lastLoggedIn : ["Monday" , "Tuesday"]
}

// // console.log(user1.isLoggedIn);
// console.log(user1["isLoggedIn"]); //When we have the declared data in string itself

// Object.freeze(user1.age) // Freeze the data 
// console.log(user1);

user1.greeting = function (){
    console.log(`Hello user1 ${this.age}`);
    
}

console.log(user1.greeting());


// myArry = ["JJ" , "Ronnie"]