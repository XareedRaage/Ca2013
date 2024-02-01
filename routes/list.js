const router=require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//Create

router.post("/addTask",async(req,res)=>{
 try {
    const {title,body,id}=req.body;
    const existingUser = await User.findById(id);
    if(existingUser){
        const list=new List({title,body,user:existingUser});
        await list.save().then(()=>res.status(200).json({list}));
        existingUser.list.push(list);
        existingUser.save();
    }
 } catch (error) {
    console.log(error)
 }
});

// Update
router.put("/updateTask/:id",async(req,res)=>{
    try {
       const {title,body,email}=req.body;
       const existingUser = await User.findOne({ email});
       if(existingUser){
         const list=  await List.findByIdAndUpdate(req.params.id,{title,body})
          list.save().then(()=>res.status(200).json({Massage:"Task Update"}));
       }
    } catch (error) {
       console.log(error)
    }
   });
   //delete
 
   router.delete("/deleteTask/:id",async(req,ress)=>{
    try {
       const {email}=req.body;
       const existingUser = await User.findByIdAndUpdate(
        { email},
        {$pull: {list :req.params.id}
    });
       if(existingUser){
       await List.findByIdAndDelete(req.params.id,).then(()=>
        res.status(200).json({Massage:"Task Delate"})
        );
       }
    } catch (error) {
       console.log(error)
    }
   });
   //get Task
   router.get("/getTasks/:id",async(req,res)=>{
    const list= await List.find({user:req.params.id}).sort({createdAt:1})
    if(list.length !== 0){
        res.status(200).json({list});
    }else{
        res.status(200).json({Massage: "No Tasks"});
    }
   });


module.exports = router;