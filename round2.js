const express = require('express')
const test2 = require('../models/test2')

const user = require('../models/user')
const router = express.Router()
const User = require ('../models/user')



router.get('/',async(req,res)=>{
    try{
         const users = await test2.find()
         res.send(users)
        //res.send('Success')
    }catch(err){
        res.send('Error',+err)
    }
})


router.post('/',async(req,res)=>{
    const test3 =new test2({
        owner:req.body.owner,
        roundone:req.body.roundone,
        testscore:req.body.testscore,
        completed:req.body.completed
    })
    try {
        const a1 = await test3.save()
        res.send(a1);
        res.send();
    }catch(err){
        res.send(err)
    }

})

module.exports = router