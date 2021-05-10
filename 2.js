// npm init -y & npm install express
const express=require("express")
const app=express()

app.get("/",(req,res) =>res.send("get request"))
app.post("/",(req,res) =>res.send("post request"))
app.patch("/",(req,res) =>res.send("patch request"))
app.delete("/",(req,res) =>res.send("delete request"))
app.put("/",(req,res) =>res.send("put request"))


app.listen(4000,() => console.log("server started on port 4000"))