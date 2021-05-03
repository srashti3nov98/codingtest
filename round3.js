const express = require('express')
const test3 = require('../models/test3')
const user = require('../models/user')
const router = express.Router()
const User = require ('../models/user')



router.get('/',async(req,res)=>{
    try{
         const users = await test3.find()
         res.send(users)
        //res.send('Success')
    }catch(err){
        res.send('Error',+err)
    }
})


router.post('/',async(req,res)=>{
    const test4 =new test3({
        owner:req.body.owner,
        roundone:req.body.roundone,
        testscore:req.body.testscore,
        completed:req.body.completed
    })
    try {
        const a1 = await test4.save()
        res.send(a1);
        res.send();
    }catch(err){
        res.send(err)
    }

})

module.exports = router