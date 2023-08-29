const express = require('express') ;
const mongoose = require('mongoose') ;
const cors = require('cors') ;
const jwt = require('jsonwebtoken') ;
const cookieParser = require('cookie-parser') ;
// const User = require('./model/StudentSchema') ;
// const Connection = require('./db/db');
const Pass = require('./model/passSchema');
const app = express();
const student = require('./model/StudentSchema')
const userRouter = express.Router() ;
app.use(express.json()) ;
app.use(cors());
app.use(cookieParser()) ;
// Connection() ;
const PORT = 8001;
const database_link = 'mongodb+srv://admin:adityasoni1017@cluster0.4mitqeh.mongodb.net/?retryWrites=true&w=majority' ;
app.listen(8001 , console.log("runnine")) ;
const connection = async ()  =>
{await mongoose.connect(database_link)
  .then(function(db){
    console.log("db connected") ;
})
.catch(function(err){
    console.log("not connected") ;
});}

connection() ;
const Login = async (req, res) =>
{    
  console.log("hey there") ;
  try{ 
   let data = req.body ;
   let user = await student.findOne({ name : data.username}) ;
   
   if (user){
       if(user.password == data.password)
       {
        console.log("heloo") ;
    
      //  let uid = user['_id'] ;
      //  let token = jwt.sign({payload:uid},"helliio") ;
      const token = user._id ;
      console.log(token) ;
      // set.cookie('haile' , "pupu") ;
       res.cookie('isloggedin' , "true" )  ;
       
           return res.json(
          {
           messege:'user has logged in' ,
           userDetails:token
          }
        ) ;
       }
       else{ 
        console.log("error" ) ;
        res.json({
           messege:'wrong credintials '
       }) ;
      }

   }}
   catch(err){
      return res.json({
           messege:'fucked'
       });
   }
}


const Generate = async (req, res) =>
{    
    const {StudentName , rollNo , email, purpose , returnTime} = req.body ; 
     console.log("here he came ") ;
    try 
    {   
       let user_id = req.cookies.user ;   
       console.log(user_id);
       if (user_id)
       {   
          const user = Pass.findById(user_id) ;

           const newPass = new Pass ({
           name : StudentName , 
           rollNo : user.rollNo , 
           purpose: req.body.purpose , 
           email:  user.email , 
           returnTime : req.body.returnTime , 
        })
       newPass.save(); 
       console.log("saved") ;
       const token = user._id ;
      console.log(token) ;
      // set.cookie('haile' , "pupu") ;
       res.cookie('isloggedin' , "true" )  ;
       
           return res.json(
          {
           messege:'user has logged in' ,
           userDetails:token
          }
        ) ;


      }
    }
    catch(error)
    {
        console.log(error) ;
    }
}

const Passsend = async(req,res)=>
{
    try {
        const data = await Pass.find() ;
        res.json({body : data}) ;
        console.log("passed") ;
    }catch{console.log("data pass")}
}
const protectroute = async (req, res) =>
{ 
  console.log("oki") ;
  const cookies = req.header("user"); 
  // console.log(cookies) ;
  // const user = await student.findById(cookies) ; 
  if(cookies)
  {
    console.log("coming inside under") ;
    const name = user.name ; 
  const data = {name , cookies} ;
  console.log(data) ;
  res.json ({data: data }) ;
  }
  else  
  { 
    console.log("ni hai") ;
    // res.json("fucked") ;
  }
  // res.send(cookies) ;//prints true that is the val ue of isLoggediN
  // console.log(cookies) ;
}
const deletePass = async (req, res) => {
    const itemId = req.params.id;
    try {
      const result = await Pass.deleteOne({ _id: itemId });
      if (result.deletedCount === 1) {
        res.json({ message: 'Item deleted successfully' });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

 
app.get('/studgene' , protectroute)
app.delete('/deletePass/:id', deletePass);
app.use('/' , userRouter) ; 
app.post('/auth/login' , Login ) ;
// userRouter.delete(`/deletePass/:id` , deletePass) ;
userRouter.get('/students', Passsend) ;
userRouter.post('/generate', Generate) ;



// app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));