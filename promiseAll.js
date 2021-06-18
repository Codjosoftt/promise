const yt = new Promise(resolve => {
    console.log("getting data from youtube")
    setTimeout(() => {
        resolve([1,2,3,4]);
    }, 3000);
});
const fb = new Promise(resolve => {
    console.log("getting data from facebook")
    setTimeout(() => {
        resolve({user: "name"});
    }, 3000);
});

Promise.all([yt,fb])
.then(result => console.log(result));