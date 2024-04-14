const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema({
    userid:{
       type:String,
       required:true
    },
    amount: {
        type: Number,
        required: [true, "amount is required"]
    },
    type:{
       type:String,
       required: [true,"tyope is required"],
    },
    category: {
        type: String,
        required: [true, "category is required"]
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    date: {
        type: Date,
        required: [true, 'please provide transection date']
    }
}, { timestamps: true })

const transectionModel = mongoose.model('transection', transectionSchema);
module.exports = transectionModel;