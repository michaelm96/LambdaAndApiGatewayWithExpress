const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

const userRoutes = require('./user/routes');

app.get('/', (req,res) => {
    console.log('from get /');
})

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoutes)


module.exports = app