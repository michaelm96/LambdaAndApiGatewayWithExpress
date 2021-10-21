const express = require('express')

const router = express.Router();

router.get('/', (req,res) => {
    // res.status(200).json({
    //     message: "Success GET User"
    // })
    res.sendFile('./index.html',{ root: 'src' });
})

module.exports = router