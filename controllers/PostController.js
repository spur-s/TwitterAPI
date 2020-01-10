var post = require('../models/PostModel.js');

function selectAll(req,res,next){
post.post.findAll()

.then(function(result)
{
  if(result=== null)
  {
    res.send("No data found")
    
  }else{
    res.json(result)
  }
}).catch(function(err)
{
  next(err)
})
}

module.exports={
    selectAll
}