// npm init -y
// npm install mysql express
const express=require("express")
const mysql=require("mysql")
const config={host:"localhost",user:"root",password:"",database:"may6"}
const con=mysql.createConnection(config)


const app=express()

app.get("/",(req,res) =>{
	let sql=`show tables`
	con.query(sql,(e,d) =>res.json(e?e:d))
})
app.get("/desc",(req,res) =>{
	let sql=`desc student`
	con.query(sql,(e,d) =>res.json(e?e:d))
})
app.get("/select",(req,res) =>{
	let sql=`select * from student`
	con.query(sql,(e,d) =>res.json(e?e:d))
})
app.get("/where",(req,res) =>{
	let sql=`select * from student where result='pass'`
	con.query(sql,(e,d) =>res.json(e?e:d))
})
app.get("/sort",(req,res) =>{
	let sql=`select * from student order by id desc`
	con.query(sql,(e,d) =>res.json(e?e:d))
})
app.get("/group",(req,res) =>{
	let sql=`select result,count(result) from student group by result`
	con.query(sql,(e,d) =>res.json(e?e:d))
})
app.get("/limit",(req,res) =>{
	let sql=`select * from student limit 90,10'`
	con.query(sql,(e,d) =>res.json(e?e:d))
})

app.listen(5000,()=>console.log("server started 5000"))