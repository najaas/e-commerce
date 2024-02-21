const express=require('express')
const router=express.Router()

const {
    loginget,
    loginpost,
    signupget,
    signuppost
}=require( '../controller/controller') 

router.get('/signup',signupget);
router.post('/signup',signuppost);
router.get('/login',loginget);
router.post('/login',loginpost);

module.exports = router

