const  student =  require ( '../model/StudentSchema') ;
const  Register = async(req, res)=>
    { 
      try
    {          
          const newUser = new student({
           name : req.body.name, 
           rollNo : req.body.rollNo , 
           phone : req.body.phone ,
           email:  req.body.email , 
           role : req.body.role , 
           password : req.body.password 
        })
           await newUser.save(); 
           console.log("saved") ;
           console.log(newUser) ;
           req.json(newUser) ;
    }
        catch(err)
        {
            console.log(err) ;
        }
    }

module.exports = Register ;