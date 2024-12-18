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


// // const result = (addTwoNumber(7 , "8"))

// // console.log("Result : ",result);

// // function loginUser (userName) {
// // if (userName === undefined){
// // console.log("user Not Found");
// // return 
// // }

// function loginUser (userName) {
//     if (!userName ){
//     console.log("user Not Found");
//     return 
//     }

// // else (userName) {
// //     console.log("user Found");
    
// // }

//     return `${userName} just logged in`
// }

// // console.log(loginUser("email"))
// console.log(loginUser())


// function calculateCartPrice( val1 , val2,...num1){  //REST Operator (...)
// return num1
// }

// console.log(calculateCartPrice (200 , 400, 500 ,89898))

function calculateCartPrice( val1 , val2,...num1){  //REST Operator (...)
    return num1
    }
    
    // console.log(calculateCartPrice (200 , 400, 500 ,89898))

    const user = {
        user1 : "hitesh",
        price : 999,
    }

    function handleObject (anyObject){
        console.log(`userName is ${anyObject.user1} and price is ${anyObject.price}`);
        
    }

    handleObject(user)

    // handleObject({              // We can directly pass the object in function call 
    //     user1 : "Ronnie",
    //     price : 900,
    // }) 

    const myNewArray = [900, 89 , 8 , 89]

    function Returner(getArray){
return getArray[3]
    }

    console.log(Returner (myNewArray))