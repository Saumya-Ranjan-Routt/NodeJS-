import * as express from "express";

let app:any = express();

app.get("/saumya",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to typescript to nodejs"});
});
app.listen(9000,()=>{
    console.log("server starte sucessfully !!!")
})