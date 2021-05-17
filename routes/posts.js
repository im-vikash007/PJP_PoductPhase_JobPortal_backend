const router = require('express').Router();
const {verify} = require('./verifytoken');
router.get('/',verify,(req,res)=>{
    res.json({
        posts:{
        title:"secret post",
        description:"only login user can access"
         }
       }).send(req.user);

    // res.send(req.user);
});
module.exports = router;