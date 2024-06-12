require('./db/connection')
const model_cons = require('./schema/schema')


const E = require('express')
const app = E();

const bp = require('body-parser')
app.use(bp.json())

const path=require('path')
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))




app.get('/home', (req, res) => {
   res.render('home')
})
app.get('/signup', (req, res) => {
   res.render('signup')
})

app.get('/signin', (req, res) => {
   res.render('signin')
})

app.get('/forgot', (req, res) => {
   res.render('forgot')
})

app.post('/re',async(req,res) => {
   const emailexist =  await model_cons.findOne({ email: req.body.email})
   if(!emailexist)
      {
         return res.send("User not exist")
      }
      else
      {
         emailexist.password=req.body.password
         emailexist.cpassword=req.body.password
         emailexist.save()
      }
})

//Register Route
app.post('/reg',async(req, res) => {
   const emailexist =  await model_cons.findOne({ email: req.body.email})
   if(emailexist)
      {
         return res.send("email id is exist ,kindly register with different email id")
      }
   else if(req.body.password != req.body.cpassword )
      {
         return res.send("password not matching with confirm password")
      }
      else
      {
         const name = req.body.name
         const email = req.body.email
         const job = req.body.job
         const password = req.body.password
         const cpassword = req.body.cpassword


         const template = model_cons({
            name,
            email,
            job,
            password,
            cpassword
         })
         template.save()
         return res.send("registration success")
      }
})

//Login Route
app.post('/login', async(req,res) => {
   const emailexist=  await model_cons.findOne({email:req.body.email})

   if(!emailexist)
      {
         return res.send("user not exist ,kindly register first")
      }
   else if (req.body.password!=emailexist.password)
      {
         return res.send("password incorrect")
      }
      else
      {
         return res.send("singed in ")
      } 
})

app.get('*',(req,res) => {
   return res.send("Sorry this page is not found")
})

app.listen(3000, () => {
   console.log("my server is running on 3000 port")
})



