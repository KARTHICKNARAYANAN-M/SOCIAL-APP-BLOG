const express= require('express');
const mongoose=require("mongoose");
const connectDb = require('./config/dbConnection');
const router=require("./routes/userroutes")

const app=express();
app.use(express.json())

connectDb();

app.use("/api/users",router);

app.listen(5000);