const User=require("../model/User");
const bcrypt=require("bcrypt");


const getAllUser=(async (req,res)=>
{
    const users=await User.find();
    console.log(users);
    
     res.status(200).json(users);
       
}
)

const signUpUser=(async (req,res)=>{
    const {name,email,password}=req.body;

    let users=await User.findOne({email});
    if(!name||!email||!password)
         return res.status(400).json({message:"All Fields are Mandatory"});
    if(users)
       res.status(400).json({message:"User Already Exists.Please Login"})
     const hashedPassword=await bcrypt.hash(password,15);
    
    const createUser=await User.create({
        name,
        email,
        password:hashedPassword
    })
    res.status(200).json(createUser);

    
})




module.exports=
 {  getAllUser ,
    signUpUser
};