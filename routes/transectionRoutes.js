const express = require('express');
const { addTransection, getAllTrasection,editTransection,deleteTransection} = require('../controllers/transectionctl');

// router object
const router = express.Router();

// routes 
// add transection || Method ->Post
router.post('/add-transection', addTransection);

// Edit transection routes || mothod -> post
router.post('/edit-transection', editTransection);

// Delete transection routes || mothod -> post
router.post('/delete-transection', deleteTransection);

//  get all transetions
router.post('/get-transetion',getAllTrasection);

module.exports = router;