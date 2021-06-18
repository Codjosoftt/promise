/*const express = require('express')
const app = express()
const port = 3002 */
const http = require('http')
const fs = require('fs')

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("simulated ajax call returned")
        resolve({
            user: "codjo "
        });
    }, 3000);

});
promise.then(mike => {
    console.log(mike)
})
const server = http.createServer((req, res) => {
    // res.send('Hello World!')
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
    console.log("html page sent on port 3004")
})

server.listen(process.env.PORT || 3004)