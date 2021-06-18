

console.log("start")
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("simulated ajax call returned")
        //resolve({user: "codjo " });
        reject(new Error( "not found"))
    }, 3000);
});
promise.then(user => {
    console.log(user)
})
.catch(err => console.log(err.message))


console.log("finish")
