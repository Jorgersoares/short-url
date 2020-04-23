const mongoose = require('../database/connection').mongoose;
const Schema = mongoose.Schema;


const ShortUrlSchema = new Schema({
    real_url : String,
    short_url : {
        type: String,
        unique : true,
    },
    created_at : {
         type : Date, 
         default : Date.now,
         expires : '2h',
    }
})

const ShortUrl = mongoose.model('ShortUrl',ShortUrlSchema);

module.exports = ShortUrl;