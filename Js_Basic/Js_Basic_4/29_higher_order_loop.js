// for of Loop

// const arr = [2,3,4,5,5,6]
// for (const val of arr) {
//     console.log(val);
// }

// const greetings = "hello"
// for (const greet of greetings) {
//     console.log(`each Character is ${greet}`);
    
// }

// map

const map = new Map()
map.set('IN',"India")
map.set('US',"USA")
map.set('POK',"Pakistan")
map.set('IN',"India")


// console.log(map);

// for (const [key , value] of map) {
//     console.log(key , ':-', value);
// }

// const myObj = {
//     'game' : "NFS",
//     'game2' : "BGMI",
// }

// for (const [key , value] of myObj) {
//     console.log(key , ":-" , value);
// }

// +++++++++++++++++++++++++forIn loop+++++++++++++++++++++++++++++++

// const myObj = {
//     js : "JavaScript",
//     RB : "Ruby",
// }

// for (const key in myObj) {
// console.log(`${key} is the shortForm of ${myObj[key]}`);
// }


// const prog = ["JS" , "PHP" , "JAVA" , "C#"]

// for (const key in prog) {
//    console.log(prog[key]);
// }

// +++++++++++++++++++++++++forEach loop+++++++++++++++++++++++++++++++

const coding = ["JS" , "Ruby" , "C#"]

// coding.forEach( function (item) {
// console.log(item )   
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

const actionList = [
    {
        language : "JavaScript",
        value : "js"
    },
    {
        language : "Python",
        value : "Py"
    }, {
        language : "C sharp",
        value : "C#"
    }, 
]

actionList.forEach((item)=>{
console.log(item.language);

})