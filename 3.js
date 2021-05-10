// npm init -y & npm install express
const express=require("express")
const app=express()

app.get("/",(req,res) =>res.json({msg:"get request"}))
app.post("/",(req,res) =>res.json({msg:"post request"}))
app.patch("/",(req,res) =>res.json({msg:"patch request"}))
app.delete("/",(req,res) =>res.json({msg:"delete request"}))
app.put("/",(req,res) =>res.json({msg:"put request"}))


app.listen(4000,() => console.log("server started on port 4000"))