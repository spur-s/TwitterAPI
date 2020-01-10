const express = require('express');
const Tweet = require('../models/tweets');
const router = express.Router();

router.post("/add",(req,res,next) => {
    Tweet.create({
        tweet:req.body.tweet,
        tweetImage:req.body.tweetImage,
        username:req.body.username,
        fullname:req.body.fullname,
        like:req.body.like,
        dislike:req.body.dislike,
        comment:req.body.comment
    }).then(() => {
      
        res.json({ status: "Tweet posted!"});
    }).catch(next);
});




router.get("/tweetList", (req,res,next) => {
    Tweet.find()
    .then(tweet => {
res.status(200).send(tweet);
        
    })
    .catch(err => { res.status(500).json({ status: "Failed", err }) })
})

module.exports = router;