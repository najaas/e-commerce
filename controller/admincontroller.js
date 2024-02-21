const {Product}=require('../model/data')

module.exports={
    adminhomeget:(req,res)=>{
    res.render('admin')

    },
    adminhomepost:(req,res)=>{
        res.redirect('/product')

    },
    product:async(req,res)=>{
        const p = await Product.find()
        res.render("productDetails", {Products:p})
    },
    addproductget:(req,res)=>{
        res.render('addProduct')
        
    },
    addproductpost:async(req,res)=>{
       try{ const {
            name,
            price,
            description
        }=req.body
        console.log(req.body);
console.log(req.file);

        const image =req.file.filename

        const newproduct=new Product({
            name,
            price,
            description,
            image
        })
        await newproduct.save()
        res.redirect('/product')}
        catch(err){
            console.log(err);
        }
    },  
    updateget:(req,res)=>{
    //     const {id} = req.params
    //    const product=await Product.findById(id)
    //    res.render('updateProduct',{product}) 
    res.render('updateProduct')     
        
    },
    updatepost:async(req, res) => {
        const {id} = req.params
        console.log(req.params)
        const {productName,productPrice,productDescription}=req.body
        console.log(productName,productPrice,productDescription)
       const product1=await Product.findById(id)
       console.log(product1);
        await Product.findByIdAndUpdate(id,{name:productName,price:productPrice,description:qqqproductDescription})
        res.redirect('/product')
        
    },
    deletepost:async(req,res)=>{
        try{
            const
            {id}=req.params
            await Product.deleteOne({_id : id})
            res.redirect("/product")
        }
        catch(err){
            console.log(err);
            res.redirect('/product')
        }
    }


}