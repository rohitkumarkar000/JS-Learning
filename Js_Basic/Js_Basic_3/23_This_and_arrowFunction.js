// Arrow Function and THIS Keyword

// const user = {
//     user1 : "Rohit",
//     price : 999,

// welcomeMessage : function  (){
//     console.log(`${this.user1}, welcome to Website` );
// // console.log(this);

    
// }

// }
// user.welcomeMessage()
// user.user1 = "Ronnie"
// user.welcomeMessage()

// console.log(this);

// function bread (){
//     console.log(this);
    
// }
// bread()

// const bomb = () => {
//     let user = "Rohit"
//     console.log(this);
    
// }

// bomb()

// const addTwo = (num1 , num2) => {        
//     return num1 + num2   
// }
// console.log(addTwo(9,7));

const addTwo = (num1 , num2) =>   num1 + num2  // We can skip {} if we have only one line of code to execute    This technique is mainly used in React

console.log(addTwo(9,7));