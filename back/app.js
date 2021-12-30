const express      = require ('express');
const mongoose     = require('mongoose');
const userRoutes   = require('./routes/user');
const saucesRoutes = require('./routes/sauce');
const path         = require('path');
const app = express();


mongoose.connect("mongodb+srv://kenuhn:2001pspalex@cluster0.c0q0q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/auth/', userRoutes);
app.use('/api/sauces', saucesRoutes);
module.exports = app