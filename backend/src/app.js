const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
require("dotenv/config")
const path= require('path');
const url=process.env.DB_CONNECTION;
const bodyParser = require('body-parser');
const Post = require("./models/Post")
const router =express.Router();


mongoose.connect(url)
   
app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true
}));




const s_path = path.join(__dirname,"../public")

app.use(express.static(s_path));



app.post("/",async(req,res,next)=>{
   
    const post = new Post({
        name : req.body.name,
        email: req.body.email,
        massage: req.body.massage,
    });

        const savePost = await post.save()
        res.status(201).redirect("/")
   
})









