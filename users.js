const express = require('express')
const router=express.Router()
const User = require ('../models/user')

router.get('/',async(req,res)=>{
    try{
        const users = await User.find()
        res.send(users)
    }catch(err){
        res.send('Error',+err)
    }
})

router.post('/',async(req,res)=>{
    const user =new User({
        name:req.body.name,
        email:req.body.email
    })
    try {
        const a1 = await user.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }

})


module.exports = router

