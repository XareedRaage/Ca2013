const router = require ("express").Router();
const User = require("../models/user");
const bcrypt = require ("bcryptjs");

//SIGN Up
router.post("/register", async(req,res)=>{
    try {
        const { email,username,password} = req.body;
        const hashpassword=bcrypt.synchashpassword(password);
        const user = new User({email,username,password:hashpassword});
        await user
        .save()
        .then(()=> res.status(200).json({ Massage: "Sign Up Successfull"}));
    } catch (error) {
    res.status(200).json({Massage:"User Already Exists"});
    }

});
    //SIGN IN
    router.post("/signin", async(req,res)=>{
        try {
          const user=await User.findOne({ email:req.body.email});
          if(!user){
            res.status(200).json({Massage: "Please Sign Up First"});
          }  
          const ispasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
            );
            if(!ispasswordCorrect){
                res.status(200).json({Massage: "Password Is Not Correct"});
              }
        const {password,...others}=user._doc;
        res.status(200).json({others })
        } catch (error) {
            res.status(200).json({Massage: "User Aready Exists"})
        }

});

module.exports = router;