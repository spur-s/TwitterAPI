
var jwt = require('jsonwebtoken');
var user=require('../models/UserModel.js');
var bcrypt = require('bcrypt');

function validtor (req,res,next){
	if(req.body.username === null){
		
		res.send('username cannot be empty')
	}
user.user.findOne({
	where:{username:req.body.username}
})
.then(function(result){

if(result === null){
res.send('You have not registered, please register first');
}
else{
	req.passwordFromDB = result.dataValues.password
next();
}

})

.catch(function(err){

})
}

function passwordCheck(req,res,next){

bcrypt.compare(req.body.password, req.passwordFromDB)
.then(function(result)
{
	if(result===true){
		next();
	}else{
		res.send('Invalid password');
	}
})
.catch(function(err)
{
	next(err);
})
}

function jwtTokenGen(req,res){
var payloadd = {
	username : req.body.username,
	userLevel:'superadmin',

}

jwt.sign(payloadd, 'thisisSecretKey'
	,{expiresIn:"10h"},function(err,resultToken){
		res.json({"usertoken":resultToken})
	})
}

function verifyToken(req,res,next){
	
	if(req.headers.authorization === undefined){
		res.json({status:401,message:"Unauthorized"})
			}

	console.log(req.headers.authorization);
	var token = req.headers.authorization.slice(7,req.headers.authorization.length)

	jwt.verify(token,'thisisSecretKey',function(err,result){
		if(!result===null)
		{
			next()
		}
		else{
			next(err);
		}
	})

}




module.exports = {
 jwtTokenGen,
 validtor,
 passwordCheck,
 verifyToken
}