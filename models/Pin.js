const mongoose = require("mongoose")

const PinSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    lat:{
        type:Number,
    },
    long:{
        type:Number
    }
}, {timestamps: true})

module.exports = mongoose.model("Pin",PinSchema)