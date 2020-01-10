var user = require('../models/UserModel.js');
var bcrypt = require('bcrypt');
var ImageController=require('../controllers/ImageController')


//to generate the has in password
function hashGen(req,res,next){
  saltRounds = 10; 
  //console.log('in has gen');
  bcrypt.hash(req.body.password,saltRounds)
  .then(function(hash){
    console.log(hash);
    req.userHash = hash;
  next();
  })
  .catch(function(err){
    next(err)
  })
  
  }





//check is username is already in database
function validation (req,res,next){
  // console.log(req.body.username);
  
  user.user.findOne({
    where:{username:req.body.username}
  })
  .then(function(result){
  // console.log(result);
  if(result === null){
  // res.send('user not found so registeed')
  next()
  }
  else{
  // console.log('user was already registered');
  res.json({status:409, message:'You are already registered'})
  
  }
  })
  .catch(function(err){
  next(err)
  })
  }



function registerUser (req,res,next){

        user.user.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,    
        username:req.body.username,
        password:req.userHash,
        image:req.body.image
        
 })
.then(function(result){
        res.status(200)
        res.json({
          satus:200,
          message:"You have regsitered"
        })
        })
        .catch(function(err){
        next(err);
 })  
 }

        module.exports={
                hashGen,
                validation,
                registerUser
        }