const express = require('express')
const test1 = require('../models/test1')
const router = express.Router()




router.get('/',async(req,res)=>{
    try{
         const users = await test1.find()
         res.send(users)
        //res.send('Success')
    }catch(err){
        res.send('Error',+err)
    }
})


router.post('/',async(req,res)=>{
    const test12 =new test1({
        owner:req.body.owner,
        roundone:req.body.roundone,
        testscore:req.body.testscore,
        completed:req.body.completed
    })
    try {
        const a1 = await test12.save()
        res.send(a1);
        res.send();
    }catch(err){
        res.send(err)
    }

})


module.exports = router