import * as express from "express";

let transactions:any = express.Router();

transactions.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"transcation soon---!"});
});
transactions.get("/user",(req:any,res:any):any=>{
    res.status(200).json({message:"welcome to typescript user --!"});
});
export default transactions;