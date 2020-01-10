const mongoose=require('mongoose');
const tweetSchema=new mongoose.Schema({
    tweet:{
        type:String,
        required:true,
    },
    tweetImage:{
        type:String
    },

    username:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },

    like:{
        type:Number,
        required:true
    },
    dislike:{
        type:Number,
        required:true
    },
    comment:{
        type:Number,
        required:true 
    }

})

module.exports = mongoose.model('Tweet', tweetSchema);