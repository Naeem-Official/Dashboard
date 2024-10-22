const express = require("express")
const bodyParser = require('body-parser');
const app = express()
const port =5000;
const Cors= require("cors")
const router = require("./Server/Routes/Route");


//Middleware to Parse Json Data
app.use(bodyParser.json())
app.use(Cors())
app.use("/dashboard/api",router)

app.listen(port,()=>{
    console.log("Server Is Connected");
})
