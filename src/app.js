const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet()); // protect sensitive information
app.use(compression()); // used to handle larger data to the client in payload
//init db

//init routes
app.get('/', (req, res, next) => {
    var num = 2147483647;
    console.log('get request');
    return res.status(200).json({
        message: "hello world",
        number: num
    });
})

//init handle error
module.exports = app