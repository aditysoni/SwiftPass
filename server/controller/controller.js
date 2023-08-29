import User from '../model/StudentSchema' ;
import Pass from '../model/passSchema' ;

const CreateOutpass = async (req, res) =>
{
    try {
       
        const newPass = new Pass ({

           username : req.body.username , 
           rollNo : req.body.rollNo , 
           purpose: req.body.purpose , 
           
           email:req.body.email , 
           returnTime : req.body.returnTime , 
        })
    
    }
    catch(error)
    {
        console.log(error) ;
    }
}

export default CreateOutpass ; 