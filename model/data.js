const mongoose=require('mongoose')

mongoose.connect("mongodb://Localhost:27017/loginandsignup")

.then(()=>{
    console.log('mongodb connected');

})
.catch(()=>{
    console.log("failed");
})

const loginScehma=new mongoose.Schema({
    name:{
        type:String,
        // required:true 
    },
    email:{
        type:String,
        // required:true
    },
    number:{
        type:String,
        // required:true
    },
    password:{
        type:String,
       // required:true
    },
    role:{
        type:Boolean,
        default:false
    }
})

const productschema=new mongoose.Schema({
    image:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const profileschema=new mongoose.Schema({
    userid:{
        type:mongoose.Types.ObjectId,
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    named:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})


// const collection=new mongoose.model('Collection',loginScehma)

// module.exports=collection

module.exports={
    user:mongoose.model("collections", loginScehma),
    Product:mongoose.model('productdetails', productschema),
    profile:mongoose.model('profiles', profileschema)
}