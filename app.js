const express = require('express');
const app = express();
const port = process.env.PORT || 2100;
var path = require('path');


console.log("start")

function loginUser(email, callback) {
    setTimeout(() => {
        console.log("we are in setimeout func")
        callback({ UserEmail: email })
    }, 3000);
}
const user = loginUser("kojo53i@live.com", user => {
    console.log(user)
});

console.log("end")
app.use( express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    // res.writeHead(200, { 'content-type': 'text/html' })
  ///  res.send('Hello World!')
    res.sendFile(path.join(__dirname + '/index.html'));
    //res.sendFile('index.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})