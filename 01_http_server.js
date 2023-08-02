let http = require("http");

let server = http.createServer((req,res)=>{
    res.write("welcome to http server");
    res.end()
});
server.listen(9000);
console.log("server listening the port no.9000");

//http://localhost:9000/?uname=saumya&upwd=saumya