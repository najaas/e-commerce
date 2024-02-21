const express=require('express')
const app = express();
const port = 9999
const path=require('path')
const session=require('express-session')

const loginrouter=require('./router/router')
const signuprouter=require('./router/router')
const adminrouter=require('./router/adminrouter')
const userrouter=require('./router/userrouter')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))


app.set("views",path.join(__dirname,"view"));
app.set("view engine","ejs")


app.use(session({
    secret: 'secret',
    resave:false,
    saveUninitialized:true
}))

app.use('/',loginrouter)
app.use('/signup',signuprouter)
app.use('/',adminrouter)
app.use('/user',userrouter)

app.listen(port,()=>{
    console.log(`ooookey ${port}`);
})
