// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 8) {
//         // console.log("Found");
        
//     }
//     // console.log(element); 
// }

// for (let i = 0; i < 10; i++) {
//     // const element = i;
//     // console.log(`outer loop ${i}`);           // -- refers to infinite loop 
    
//     for (let j = 0; j < 10; j++) {
//         // const block = j;
//         // console.log(`inner loop ${j}`);
//         console.log(j + ' * ' + i + ' = ' + i * j);
//     }
// }


// Break and Continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break ;
//     }
// console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
    continue 
    }
console.log(`value of i is ${i}`);

}