require('dotenv').config()
const express = require('express')
const app = express()
const port=4000

app.get('/',(req,res)=>{
    res.send('Hello')
})
app.get('/twitter',(req,res)=>{
    res.send('The twitter called')
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server created listning at ${port}`);
    
})