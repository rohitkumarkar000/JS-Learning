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


// FETCH() High Priority queue 