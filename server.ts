import * as express from "express";
import transactions from "./transactions";
import accounts from "./accounts";

let app:any = express();
app.use("/saumya",transactions);
app.use("/pintu",accounts);
app.listen(9000,()=>{
    console.log("server stated!!!");
});
