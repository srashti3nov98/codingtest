const express = require('express')
const mongoose = require ('mongoose')
//const MongoClient =require('mongodb').MongoClient;
const url='mongodb://localhost:27017/candidate'
const app = express()

mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});


const con = mongoose.connection

con.on('open',() =>{
    console.log('connected....')
})



app.use(express.json())

const userRouter= require ('./routers/users')
app.use('/users',userRouter)

const roundRouter= require ('./routers/round1')
app.use('/round1',roundRouter)

const roundRouter2= require ('./routers/round2')
app.use('/round2',roundRouter2)

const roundRouter3= require ('./routers/round3')
app.use('/round3',roundRouter3)




app.listen(9000,()=>{
    console.log('server started')
})