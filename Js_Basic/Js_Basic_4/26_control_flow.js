// if statement 
// const isUserLoggedIn = true


// if (2 != 1) {          // In True statemnt only Code will execute 
// console.log("true");
// }
// else {
//     console.log("false");
    
// }
// if (false) {        // In False statement Code will not execute

// }

//Comparison Operators
// < -- Less Than
// > -- Greater Than
// >= -- Greater Than Equal to
// <= -- Less Than Equal to
// == -- Equal to
// === -- Strictly Equal too or checks the type 
// != -- Not Eqaul to


// const score = 800

// if (score > 200) {
//     const power = "fly"
// console.log(`user power: ${power}`);   // var should not be used 
// }

// const balance = 1000

// if (balance > 500) console.log("test"); // Implicit scope We cant use multiple line 

// if (balance < 500) {
// console.log("less than");
// }

// else if (balance < 750) {
//     console.log("less than 750");   // Nested If Else
// }
// else {
//     console.log("YAYAYAYA");
// }

// const isUserLoggedIn = true
// const debitCard = true
// const isUserLoggedInFromGoogle = false
// const isUserLoggedInFromEmail = true

// if (isUserLoggedIn && debitCard && 7 !== 7) {      // && Checks both the condition which is on right and left to execute   // AND Operator
//                                                    // the code present inside of scope both the values should be true 
//     console.log("allow to buy");
// }

// if (isUserLoggedInFromEmail || isUserLoggedInFromGoogle) {             // || OR operator
//     console.log("Welcome to Github");
// }



// +++++++++++++++++++++++++++++++++ Switch++++++++++++++++++++++++++++++++++++++++

// const month = 3
// switch (month) {
//     case 1:
//         console.log("this month is janauary");
//         break;
//         case 2:
//             console.log("this month is februry");
//             break;
//             case 3:
//                 console.log("this month is march");
//                 break;
//                 case 4:
//                     console.log("this month is april");
//                     break;
//                     case 5:
//                         console.log("this month is may");
//                         break;
//     default:
//         console.log("Month is not found");
//         break;
// }

// +++++++++++++++++++++++++++++++++++++++Truthy or Falsy++++++++++++++++++++++++++++++++++++++++++++++++++++

// const userEmail = []

// if (userEmail) {
//     console.log("got user email");
// }
// else {
//     console.log("email not found");   
// } 

//Falsy Value {

// false
// 0
// -0
// BigInt(0n)
// ""
// null
// undefined
// NaN

// }

// Left out are Truthy Value
// []
// '0' 
// 'false'
// " " space in also Truthy value
// {} Object is also a truthy Value'
// function () {}  Empty Function


// Nullish Operator ??

// let val1;
// // val1 = 7 ?? 8
// // val1 = null ?? 8
// val1 = undefined ?? null
// console.log(val1);

// Terniary Operator

// condition ? true : false   // Format

// const iceTeaPrice = 100

// iceTeaPrice <= 900 ? console.log("iceTea is expensive") :console.log( "ice Tea is cheap")
