// npm init -y & npm install express
const express=require("express")
const app=express()

app.get("/",(req,res) =>res.end("get request"))
app.post("/",(req,res) =>res.end("post request"))
app.patch("/",(req,res) =>res.end("patch request"))
app.delete("/",(req,res) =>res.end("delete request"))
app.put("/",(req,res) =>res.end("put request"))


app.listen(4000,() => console.log("server started on port 4000"))