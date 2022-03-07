const express = require('express');
const Convo = require('../models/Convo');
const router = express.Router();
const Email = require('../models/Convo');

router.get('/', async (req, res) => {
    try{
        const posts = await Convo.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//submit
router.post('/', async (req, res) => {
    const convo = new Convo({
        uid: req.body.uid,
        subject: req.body.subject,
        to: req.body.to,
        from: req.body.from,
        html: req.body.html,
        enail_texts: req.body.enail_texts,
        data_status: req.body.data_status,
    });
    try {
    const savedConvo = await convo.save();
    res.json(savedConvo)
    }catch(err){
        res.json({message: err});
    }
});

// get specific
router.get('/:postId', async (req, res) => {
    try{
    const post = await Convo.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message: err})
    }
});

// update specific

router.patch('/:postId', asnyc (req, res) => {
    try{
        const updatedConvo = await Convo.updateOne(
            {_id: req.params.postId}, 
            {$set: {data_status: req.body.data_status}}
        );
        res.json(updatedConvo);       
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;