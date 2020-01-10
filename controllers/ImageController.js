
function insertImage(req,res)
{
    //console.log(req.file.filename)
    res.json(req.file)
}



module.exports={insertImage}