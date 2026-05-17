const express =require("express")
const cookieParser = require("cookie-parser");


const app=express();

app.use(express.json())
app.use(cookieParser())

//Route Required
const authRouter=require("./routes/auth.route");
const accountRouter=require("./routes/account.routes")
const transactionRoutes = require("./routes/transaction.routes")

//api routes
app.get("/",(req,res)=>{
    res.send("Ledger Service is Up and Running")
})

app.use("/api/auth",authRouter)
app.use("/api/accounts",accountRouter)
app.use("/api/transactions", transactionRoutes)



module.exports = app