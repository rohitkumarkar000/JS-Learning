// // var c = 800
// let a = 90

// if(true) {

//     let a = 8
//     const b = 20
//     // var c = 30
//     console.log("inner :" , a);
    
// }

// console.log(a);
// // console.log(b);
// // console.log(c);

// // {Block Scope}   Global Scope


// function one(){
// const userName = "Hitesh"

// function two(){
//     const website = "Website" 
//     console.log(userName);
//     }
//     // console.log(website);
//     two()
// }
// // one()
// if(true) {
//     const userName = "Rohit"
// if (userName == "Rohit") {
// const website = " Google"
// console.log(userName + website);    // When we want to print something whic is declared it must be inside the Scope 

// console.log(website);

// }
// // console.log(website); // it will not execute because it is outside of the scope
// // console.log(userName);  
// }
// console.log(userName);  //it will not execute because it is outside of the scope

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num){
return num + 1
}
addOne(8)
console.log(addOne(8))


const addTwo = function (){    // Variable are strong enough to hold any value and we can't execute at initialisation of declaration of variable   Cannot access 'addTwo' before initialization
    return addTwo + 2
}
addTwo(10)
