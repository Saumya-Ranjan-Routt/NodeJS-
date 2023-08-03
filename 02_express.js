let express = require("express");

//create the rest object


//get request
let app = express();
app.get("/",(req,res)=>{
    res.status(200).json({"message":"default get request---!"});
});

app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"data from mongodb data soon---!"});
});


//post request

app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request ---!"});
});

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"data from cassandradb data soon ---!"});
});
app.listen(9000,()=>{
    console.log("server started");
})