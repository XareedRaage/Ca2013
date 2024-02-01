const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
    title:{
        type: String,
        requred:true,
    },
    body:{
        type: String,
        requred:true,
    },
    user:[
        {
            type: mongoose.Types.ObjectId,  
            ref:"User",
        },
        
    ],
    
},
{timetemps:true}
);
module.exports=mongoose.model("List",listSchema);