// const coding = ["JS" , "Ruby" , "C#"]

// const values = coding.forEach((item) => {
// // console.log(item);
// return item
// })

// console.log(values);

// const myNums = [1,2,3,4,45,5]

// const newNums = myNums.filter((num) => {    // Wehn we open a scope it is neccessary to use return inside of it 
// return num > 4
// })


// const newNums = []
// myNums.forEach((num) => {
// if (num > 4) {
//     newNums.push(num)
// }
// // else {
// //     console.log("sdfg");
    
// // }
// })
// console.log(newNums);

// const books = [
//     {tittle : "book 1" , genre  :"Fictional" , publish : 2009},
//     {tittle : "book 2" , genre  :"Romance" ,publish : 2010},
//     {tittle : "book 3" , genre  :"Moral" ,publish : 2019},
//     {tittle : "book 4" , genre  :"Fictional" , publish : 2039},
//     {tittle : "book 5" , genre  :"Adventure" , publish : 2009},
//     {tittle : "book 6" , genre  :"Adventure" , publish : 2018},
//     {tittle : "book 7" , genre  :"Adventure" , publish : 2090},
// ];

// let user1 = books.filter((bk) => bk.publish === 'Fictional')
// user1 = books.filter((bk) => {return bk.publish <= 2009 && bk.genre === 'Adventure'})

// console.log(user1);

  
    // else {
    //     console.log("not Found");
        
    // }
// return need

// console.log(user1);

// +++++++++++++++++++++++++++++++Filter+++++++++++++++++++++++++++++++++++++




// const myNums = [6,3,324,5,67,23,2345,2345]

// const newNums = (myNums.map((num) => num + 10))            // Without using return

// console.log(newNums);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = (myNums.map((num) => {return num + 10}))

// // console.log(newNums);

// const newNums = myNums
//                       .map((num)=> num * 10)
//                       .map((num)=> num + 1)
//                       .filter((num)=> num >= 40)

//                       console.log(newNums);
                      
// +++++++++++++++++++++++++++++++++++Reduce++++++++++++++++++++++++++++++++++++++++

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currVal){
// console.log(`acc: ${acc} and currVal : ${currVal}`);  
//     return acc + currVal
// } , 0)

// console.log(myTotal);
// console.log(myTotal);

// const myTotal = myNums.reduce((acc , currVal)=> acc + currVal 

// )
// console.log(`acc: ${acc} and currVal : ${currVal}`);  

// const myTotal = myNums.reduce((acc , currVal) => acc + currVal, 0)

// console.log(myTotal);


const myShoppingList = [
    {
        course: "js",
        price : 999,
    },
    {
        course: "C++",
        price : 899,
    },{
        course: "Python",
        price : 929,
    },{
        course: "Java",
        price : 939,
    },{
        course: "C#",
        price : 919,
    },{
        course: "Css",
        price : 909,
    },
]

const totalPrice = myShoppingList.reduce((acc , item)=> acc + item.price , 0) 
console.log(totalPrice);
