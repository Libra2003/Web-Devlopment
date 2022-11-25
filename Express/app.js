const express = require("express");
const app = express();
const port = 80;

app.use('/static',express.static('static'))

app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with zain");
});

app.get("/about",(req,res)=>{
    res.send("This is the get about page of my first express app")
});

app.post("/about",(req,res)=>{
    res.send("This is the post about page of my first express app")
});

app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});