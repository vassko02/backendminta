# backendminta

cmd ben: express --no-view hahuapi
npm i --save-dev nodemon
npm i --save mongoose
"scripts": {
"start": "nodemon ./bin/www"
},

var mongoose = require('mongoose');
const MONGODB_URI =
"mongodb://localhost:27017"
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Connected to MongoDB"))
    .catch(err => {
        console.log(err);
    });


const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const hirdetesSchema=new Schema({
    _id:Number,
    kategoria:{
        type:Number,
        default:1
    },
    cim:{
        type:String,
        required:true,
        unique:true,
        maxlength:100
    },
    leiras:{
        type:String,
        maxlength:3000
    },
    hirdetesDatuma:{
        type:Date,
        default:Date.now
    },
    serulesMentes:Boolean,
    arFt:{
        type:Number,
        required:true
    },
    kepUrl:{
        type:String,
        maxlength:300
    }
});
module.exports=mongoose.model('Hirdetes',hirdetesSchema,'hirdetesek');