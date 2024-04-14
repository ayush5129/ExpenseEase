const transectionModel = require("../models/transectionModel");
const moment = require('moment')
const getAllTrasection = async(req,res) =>{
    try {
        const {frequency,selectedDate,type} = req.body
        const transetions = await  transectionModel.find({
            ...(frequency !== 'custom' ? {
                date:{
                    $gt:moment().subtract(Number(frequency),"d").toDate(),
                },
            } : {
                date:{
                    $gte:selectedDate[0],
                    $gte:selectedDate[1],
                },
            } ),
            userid:req.body.userid,
            ...(type !== 'all' &&{type}),
        })
            
        res.status(200).json(transetions);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);  
    }
};
const editTransection = async(req,res) =>{
    try {
     await transectionModel.findOneAndUpdate(
         {_id:req.body.transactionId},
         req.body.payload
     );
     res.status(200).send("Edit Successfully")
    } catch (error) {
     console.log(error)
     res.status(500).json(error);
    }
 };
 const deleteTransection = async(req,res) =>{
    try {
        await transectionModel.findOneAndDelete(
            {_id:req.body.transactionId},  
        );
        res.status(200).send("Transaction Deleted")
       } catch (error) {
        console.log(error)
        res.status(500).json(error);
       }
 };

const addTransection = async(req,res) => {
    try {
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send("Transation Created");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {getAllTrasection,addTransection,editTransection,deleteTransection};