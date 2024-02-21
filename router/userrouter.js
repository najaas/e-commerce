const express=require('express')
const router=express.Router()

const {
    userhomeget,
    // product,

    userhomepost,

    profileget,

    profilepost
}=require('../controller/usercontroller')

router.get('/',userhomeget)
router.post('/',userhomepost)
router.get('/profile',profileget)
router.post('/',profilepost)
// router.get('/',product)
module.exports = router