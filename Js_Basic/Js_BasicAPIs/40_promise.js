const promiseOne = new Promise(function(resolve, reject) {
    // Do an async Task 
    // DB call , Cryptography related , network call etc
    setTimeout(function (){
        console.log('asyn task is complete'); 
        resolve()
  
    },1000)
})

promiseOne.then(function (){
    console.log("Promise Cnsumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
    },2000)
}).then(function () {
    console.log("asyn to resolve");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({userName: "Code" , email: "abc@gmail.com"})
    }, 2000);
})

promiseThree.then(function (user) {
    console.log(user);
    
})

const promise4 = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userName : "ROhit" , pswd: '1234'})
        }
        else {
            reject('ERROR something went wrong')
        }
    }, 2000);
})

const userMane = promise4
.then((user => {
    console.log(user);
    return user.userName
}))
.then((myUserName)=>{
console.log(myUserName);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
console.log("done");

})


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({userName : "Javascript" , pswd: '1234'})
        }
        else {
            reject('Error AYA HAi')
        }
    }, 2000);
})

async function consumePromise5() {
 try {
    const res = await promise5 
    console.log(res);
 } catch (error) {
    console.log(error);
 }
}

consumePromise5()

async function getAllUser() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
console.log(data);
console.log(response);

   } catch (error) {
    console.log("E :" ,error);
   }
}

getAllUser()

    
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);

})
.catch((error)=>{
    console.log(error);
})