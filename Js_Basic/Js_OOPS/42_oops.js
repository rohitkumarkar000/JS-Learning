// ++++++++++++++++Object Literal ++++++++++++++++
// const user = {
//     userName: "Rohit",
//     loginCount: 9,
//     signedIn: true,

// getUserDetails: function() {
//     // console.log("Got user detail");
// // console.log(`UserName ${this.userName}`);
// console.log(this);

//  }
// }

// const user2 = {
//     userName: "Alok",
//     loginCount: 8,
//     signedIn: true,

// getUserDetails: function() {
//     // console.log("Got user detail");
// // console.log(`UserName ${this.userName}`);
// console.log(this);

//  }
// }
// console.log(user2.userName);
// // console.log(user.getUserDetails());
// console.log(this);

// ++++++++++++++++++Constructor++++++++++++++++++

// const promiseOne = new Promise()
// const date = new Date()   // new = Constructor Function


function user(userName , loginCount) {
    this.userName = userName;
    this.loginCount = loginCount;

    this.greeting = function () {
        // console.log(`Welcome${this.userName}`);
    }

    return this   // By Default we get return value
}

const userOne = new user("Rohit", 12, true)
const userTwo = new user("Code" , 11 , false) // Here we will use new keyword to prevent overwritting of code 
console.log(userOne.constructor);
console.log(userTwo);

