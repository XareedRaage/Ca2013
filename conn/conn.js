const mongoose=require("mongoose");
const conn=async(req,res)=>{

   try{
      await mongoose
      .connect("mongodb+srv://Todo1:wllkp9683@cluster0.mls3ypr.mongodb.net/")
      .then(()=>{
      console.log("connected")
      
      });

      
    
 } catch (error) {
    res.status(400).json({
        Massage:"Not Connected",
    });
 }
    
   };
conn();

