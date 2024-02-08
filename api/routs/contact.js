const express = require('express')

const router = express.Router();

// Get 
router.get('/',(req,res,next) =>{
    res.status(200).json(
        {message: 'Hello, I am all contacts Get Route'}
    )
})

// Post
router.post('/',(req,res,next) =>{
    res.status(201).json(
        {message: 'Hello, I am all contacts Post Route'}
    )
})

router.get('/:id', (req,res,next) =>{
    id = req.params.id
    res.json({
        id
    })
})

router.put('/',(req,res,next) =>{
    res.status(201).json(
        {message: 'Hello, I am put Route'}
    )
})

router.delete('/',(req,res,next) =>{
    res.status(201).json(
        {message: 'Hello, I am delete Route'}
    )
})


module.exports = router;