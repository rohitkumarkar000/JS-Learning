// // // const number1 = 2
// // // const number2 = 6

// // // console.log(number1 + number2);


// const num1 = 98
// const num2 = 7

// // // const sum = num1 + num2
// // // console.log("this is the sum :", sum);


// // // const multiply = num1*num2
// // // console.log("this is the product :", multiply);

// // // const divide = num1/num2
// // // console.log(divide);

// // // const reminder = num1%num2
// // // console.log("this is the reminder :" ,reminder);

// // // const equal = num1 == num2
// // // console.log(equal); //False 

// // // const comparison = num1 > num2   (TRUE)
// // // console.log(comparison);


// // // const comparison = num1 >= num2  (TRUE)
// // // console.log(comparison);


// // // const comparison = num1 <= num2  (TRUE)
// // // console.log(comparison);

// const exponential = num1**num2 
// console.log(exponential);



// Basic Calculator

// function calculator(num1 , num2 , operator){

// switch(operator){
// case "+" : 
// return  num1 + num2
// case "-":
//     return num1 - num2
//     case "*" : 
//     return num1 * num2 
//     case "/":
//         return num1 !== 0 / num2 ? num1/num2 : "Can't divide by zero"

//         default :
//         return "Invalid Operator"
// }
// }
// calculator()

// const num1 = 0;
// const num2 = 4;
// const operator = '*';

// const result = calculator(num1 , num2 , operator);

// console.log(`this is  ${result}`);

// console.log("vbgn");


// const odd = {}

// function oddEven(num) {
//     if (num / 2 == 0) {
        
//         console.log("number is even");
//     }
//     else{
//         console.log("number is odd");
//     }
// }
// oddEven(8)

function even(number) {
   return number % 2 == 0;
}

function odd(number) {
  return number % 2 !== 0;
}

function checkOddEven(number) {
    if (even(number)) {
        console.log(`${number} is even`);
    }
    else if (odd(number)) {
console.log(` ${number} is odd`);
    }
    else {
        console.log(`number is not Valid`);
    }
}
checkOddEven(12);