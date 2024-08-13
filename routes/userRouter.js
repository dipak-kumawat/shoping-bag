const express = require('express')
const router = express.Router()
const dbgr = require('debug')('development:mongoose')

router.get('/', function(req, res){
    res.send('hey it working')
})


module.exports = router;