const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  // TODO: Send the ""Hello, world!"" response
  if(req.url == '/'){
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end("Hello, world!")
  }
});

server.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  console.log('Server port running on 3000')
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }


// import http from "http"

// const server = http.createServer((req,res) =>{
//     if(req.url == '/'){
//         res.writeHead(200,{"Content-type":"text/plain"})
//         res.end("This is root route")
//     }
//     else if(req.url == "/contact"){
//         res.writeHead(200,{"Content-type":"text/plain"})
//         res.end("MY Contact : "+ 8681945143)
//     }
//     else if(req.url == "/about"){
//         res.writeHead(200,{"Content-type":"text/plain"})
//         res.end("Welcome back Sriram")
//     }
// })

// server.listen(8080,()=>{
//     console.log('Server port running on 8080')
// })