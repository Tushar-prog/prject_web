// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3001;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end("hello world");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// // console.log("hello world");
// const http = require('http');
// const fs = require('fs');
// const filecontent = fs.readFileSync('web.html');
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end(filecontent)

// })
// //req== request and res == response  the no.200 signifies responses
// server.listen(80,'127.0.0.1',()=>{
//     console.log("listening to port 80")
// })
const http = require('http');
const hostname = '127.0.0.1';
const fs= require('fs');
const port = 3000;
const home = fs.readFileSync('web.html');
const contact = fs.readFileSync('./contact.html');
const blog = fs.readFileSync('./blog.html');
const search = fs.readFileSync('./search.html');

const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/html');
     console.log(req.url);
     url = req.url;

    
   });
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
