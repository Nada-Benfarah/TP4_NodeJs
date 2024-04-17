const express =require('express');
const app = express();
const bodyParser =require('body-parser');
const { default: mongoose } = require('mongoose');
app.set('view engine','ejs')

const category =require('./controllers/category')
const produit = require('./controllers/produit');
const authenticate = require('./middleware/authenticate');

app.use(authenticate)
app.use("/product",produit)
app.use("/category",category)
app.use(express.json());




const mongoose = require('mongoose')
const dotenv = require( 'dotenv');
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 9000
console.log("PORT",PORT)

mongoose.connect(MONGODB_URI).then(()=> {
    console.log('connected to the database')
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
}).catch(err =>{
    console.log('error connecting to database : ', err.message)
})

app.get('/protected',  (req, res) => {
    res.send('Protected route accessed');
});

app.use("/auth",authRoutes)

// instance variable from express










