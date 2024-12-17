// function sayMyName () {
//     console.log("R");
//     console.log("o");
//     console.log("H");
//     console.log("I");
//     console.log("T");  
// }

// sayMyName() //() are required to print

// function addTwoNumber (number1 , number2){
// console.log((number1 + number2));
// }

// function addTwoNumber (number1 , number2){
// // let result = number1 + number2
// // return result //Nothing Prints after Return (Unreachable Code)

// return number1 + number2

// }


// const result = (addTwoNumber(7 , "8"))

// console.log("Result : ",result);

// function loginUser (userName) {
// if (userName === undefined){
// console.log("user Not Found");
// return 
// }

function loginUser (userName) {
    if (!userName ){
    console.log("user Not Found");
    return 
    }

// else (userName) {
//     console.log("user Found");
    
// }

    return `${userName} just logged in`
}

// console.log(loginUser("email"))
console.log(loginUser())
