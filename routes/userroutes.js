const express=require('express');
const {getAllUser} = require('../controller/user-controller');
const {signUpUser}= require("../controller/user-controller")

const router=express.Router();

router.get("/",getAllUser);
router.post("/signup",signUpUser);

module.exports=router;