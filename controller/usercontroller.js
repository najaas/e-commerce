const {Product}=require('../model/data')

module.exports={
    userhomeget:async(req,res)=>{
        const card= await Product.find()
        res.render('user',{Products:card})
    },
    userhomepost:(req,res)=>{
        res.render("profile")
    },
    profileget:(req,res)=>{
        res.render('profile')
    },
    profilepost:(req,res)=>{
        res.render('user')
    }
}