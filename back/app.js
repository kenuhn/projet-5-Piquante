const express = require ('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/API-P6",
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err) => {
        if (!err){
            console.log('mongodb connecté')
        }
        else {
            console.log ('vous avez surement une erreur ' + err)
        }
    })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next()
  });
  app.use(express.json());
app.use('/api/auth/', userRoutes);
module.exports = app