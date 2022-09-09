const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require('./db/user');
const ap = express();  
const app = require('./app');
const dotenv = require("dotenv");



app.use(express.json());
app.use(cors());

app.post("/register",async (req, resp)=>{
    let user = new User(req.body);
    let result = await user.save();    
    resp.send(result);

})

dotenv.config({path:"backend/config/config.env"});

ap.listen(process.env.PORT,()=>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)
}

)

app.listen(5000);