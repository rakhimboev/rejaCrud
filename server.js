console.log('Web server is running')
const express = require('express');
const app = express();
const http = require('http');

// 1 starting code
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 2 Sessions code
// 3 views code
app.set('views', 'views')
app.set('view engine', 'ejs')

// 4
app.get('/', (req, res) => {
    res.end('<h1>Hello World</h1>')
})

const server = http.createServer(app);
let PORT = 3001
server.listen(PORT, () => {
    console.log(`The server is running at ${PORT}`)
})