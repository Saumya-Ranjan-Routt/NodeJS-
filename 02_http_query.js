let url = require("url");
let http = require("http");


//create the httpServer
let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    //parse the request
    let obj = url.parse(req.url,true).query;

    if(obj.uname === "saumya" && obj.upwd === "saumya"){
        res.write("<h1>Login Success</h1>");
    }else{
        res.write("<h2>Login failed</h2>");
    }
    res.end();
})
server.listen(9000);
console.log("server listening the port no.9000");