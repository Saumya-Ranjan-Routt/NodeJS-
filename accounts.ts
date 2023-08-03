import * as express from "express";

let accounts:any = express.Router();
accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"create account soon"});
});
accounts.post("/posts",(req:any,res:any):any=>{
    res.status(200).json({message:"server account is created"});
});
export default accounts;
