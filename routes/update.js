const router = require('express').Router();
const {verify} = require('./verifytoken');
const User = require('../model/User.js');

router.post('/:id',verify,(req,res)=>{
    const { name, email, password } = req.body;
    let updatedParams=[];
    User.findOne({_id:req.params.id },(err,doc)=>{
        if(name){
            doc.name=name;
            updatedParams.push('Name');
        }
        if(email){
            doc.email=email;
            updatedParams.push('Email');
        }
        if(password){
            doc.password=password;                                                
            updatedParams.push('Password');
        }
        doc.save();
        res.send(updatedParams +' updated successfully.')
    });
    // let errors=[];
    // if (!name || !email || !password) {
    //     errors.push({ msg: 'Please fill in all fields' });
    // }
    //   //check pass length
    // if (password.length < 6) {
    //     errors.push({ msg: 'Password should be at least 6 characters' });
    // }
    // if (errors.length > 0) {
    //     res.status(400).send('error in updation. enter correct data');
    // }else{
    //     User.findOne({_id:req.params.id },(err,doc)=>{
    //         doc.name=name;
    //         doc.email=email;
    //         doc.password=password;
    //         doc.save();
    //     });
    // }
    // res.send('Successfully updated');

});


module.exports = router;