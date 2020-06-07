const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    res.json({
        isError: true,
        msg: "Void Method"
    })
})

router.post('/register', (req, res)=>{
    console.log(req.body)
    res.json({
        msg: "Successfully Registered!"
    })
})

module.exports = router