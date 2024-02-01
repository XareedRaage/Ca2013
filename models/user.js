const mongoose =require("mongoose");
const userSchema = new mongoose.Schema({
    
    email:{
        type: String,
        unique:true,
        requred:true,
    },
    username:{
        type: String,
        dunique:true,
       
        
    },
    password:{
                type: String,
               requred:true,
           },
    list:[
        {
            type: mongoose.Types.ObjectId,  
            ref:"List",
        },
        
    ],
    
},
{timetemps:true}
);

module.exports=mongoose.model("User",userSchema);




