require('dotenv').config()
//import express from 'express'
const express=require('express')
var app=express()
app.set('port',process.env.PORT||8003)



//url rewiting

// app.get('/car/:num',(req: { params: { num: string } },res:any)=>{
//     var val=req.params.num
//     res.send(`hello car ${val}`)
// })


//stating ending midle forgot--*
// app.get('/ca*r',(req:string,res:any)=>{
//     res.send("hello car")
// })


//+ one or more no of times
// app.get('/ca+r',(req:string,res:any)=>{
//     res.send("hello car")
// })

//-?-zero or 1
// app.get('/c?a?r',(req:string,res:any)=>{
//     res.send("hello car")
// })



















// var obj=[{a:"hgg",b:"hghhg"},{a:"hgg",b:"hghhg"}]
// app.route('/home')
// .get((req:any,res:any)=>{
//     res.send(obj)
// })
// .put((req:any,res:any)=>{
//     res.send(obj)
// })
// .post((req:any,res:any)=>{
//     res.send(obj)
// })
// .delete((req:any,res:any)=>{
//     res.send(obj)
// })

app.listen(app.get('port'),()=>{
    console.log(`server started  ${app.get('port')}`)
})








app.get('*',(req:any,res:any)=>{
    res.send('404')
})