import User from '../model/schema';

async function loginUser (req, res) 
{  
   console.log("hey there") ;
   try{ let data = req.body ;
    let user = await userModel.findOne({email : data.email}) ;
    
    
    if (user){
        if(user.password == data.password)
        {
        //signature is creted
        // { 
        let uid = user['_id'] ;
        let token = jwt.sign({payload:uid},"heygoodidefeegfegf")
        res.cookie('isloggedin' , token, { httpOnly:true  }) ;
        // }
            return res.json
        (
           {
            messege:'user has logged in' ,
            userDetails:data
           }
         ) ;
        }
        else res.json({
            messege:'wrong credintials '
        }) ;


    }}
    catch(err){
       return res.json({
            messege:'fucked'
        });
    }
}

