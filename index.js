import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app=express();
const port=10000;

app.use(express.static(path.join(__dirname, 'public')));
app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/projects",(req,res)=>{
    res.render("projects.ejs");
})

app.listen(port,()=>{
    console.log("Server is running")
})
