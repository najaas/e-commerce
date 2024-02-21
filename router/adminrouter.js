const express=require('express');
const multer=require('multer')
const upload=require('../middleware/multer')
const router=express.Router()


const{
    adminhomeget,
    adminhomepost,
    product,
    addproductget,
    addproductpost,
    updateget,
    updatepost,
    deletepost
}=require('../controller/admincontroller')

router.get('/admin',adminhomeget)
router.post('/product',adminhomepost)
router.get("/product",product)
router.get('/addProduct',addproductget)
router.post('/addProduct',upload.single('image'),addproductpost)
router.get('/updateProduct/:id',updateget)
router.post('/updateProduct/:id',updatepost)
router.post('/delete/:id',deletepost)


module.exports=router