const jwt = require('jsonwebtoken');

const verify = (req,res,next)=>{
    const token = req.cookies['jwt']; 
    if(!token) return res.status(401).send('Access Denied');
    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified ; // return object with payloads and time of intiation
        next();
    }
    catch(err){
        res.status(400).send('invalid token');
    }
};

module.exports.verify = verify;