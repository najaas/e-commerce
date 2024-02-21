// const express=require('express')
// const router=express.Router()
// const { log } = require("util");
// const { log } = require("util");
const {user}=require("../model/data")
const {Product}=require('../model/data')
const passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneregex=/^\d{10}$/



module.exports={ 
    loginget:(req,res)=>{
        res.render('login')
    },
    loginpost: async (req,res)=>{
        const card= await Product.find()
        const{email,password}=req.body;
        console.log(email);
        console.log(password);
      const user1=await user.findOne({email:email})
      if(user1.password===req.body.password){
        if(user1.role===true){
            res.render('productDetails',{Products:card}) 
        }else{
            res.render('user',{Products:card})
        }
      }else{
         console.log("not verf ")
         res.redirect("/login")
      }
    },
    signupget:(req,res)=>{
        res.render('signup')
    },
    signuppost:async (req,res)=>{
      if( ! passwordregex.test(req.body.password) || ! emailregex.test(req.body.email) || ! phoneregex.test(req.body.number)){
        res.send('err')
      }else{
        const find=await user.findOne({email:req.body.email})
        const aa=10;
        if(find){
            res.send('Email is already exist')
        }else{
            console.log(aa);
            const confirmpassword = req.body.confirmpassword;
            const password=req.body.password;
            // const same= 
            if( confirmpassword ===  password){
                // res.render('login')
                // res.send(" match")
                const datas= await user({
                    name:req.body.name,
                    password:req.body.password,
                    email:req.body.email,
                    number:req.body.number
        
               })
               await datas.save()
                res.redirect('login') 

            }else{
                res.send('password not match')

            }

                                                                                                                                                                                                                                                                                                                     
    
}}}
}

