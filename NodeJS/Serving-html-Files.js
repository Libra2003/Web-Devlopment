//How to serve files accroding to the user requirement
const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('Math-Objects.html')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening on port 8000");
})