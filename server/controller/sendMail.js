
const nodemailer = require('nodemailer') ;

const sendEmail = async (pass) => 
{
    //Create a transporter
      // provider 
     const transporter = await nodemailer.createTransport(
        {    service: 'Gmail' , 
            auth : {
                user: "tablefanchair@gmail.com" , 
                pass:  "adityasoni2011" , 
            } ,
        }
     ) ;
     // 2.Define the email options 
     // people to send mail 
   let Authizingmail = 
   {
      from : "tablefanchair@gmail.com ", 
      to : pass.email, 
      subject : "Regarding the outpass authorization", 
      text:  `Your out pass id ${user._id} is AUTHORIZED and you can go out of the campus . Happy and safe journey ${user.name} . Please be in the capmus before ${user.returnTime} . Thanks and regards .` , 
      
   };
  

   let NotAuthizingmail = 
   {
      from : " wardern <<adisoni@gmail.com>> ", 
      to : user.email, 
      subject : "Regarding the outpass authorization", 
      text:  `Your out pass id ${user._id} is AUTHORIZED and you can go out of the campus . Happy and safe journey ${user.name} . Please be in the capmus before ${user.returnTime} . Thanks and regards .` , 
      
   };
  

    //3.Active send mail 
    
    if(user.status == "authorized") await transporter.sendMail(Authizingmail) ;
    if(user.status == "not authorzied ") await transporter.sendMail(NotAuthizingmail) ;
    
} ;



module.export = sendEmail ;