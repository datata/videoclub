const express = require('express');
require('dotenv').config();
const db = require('./config/database');
const userRouter = require('./routes/user.routes');
const filmRouter = require('./routes/film.routes');
const authRoutes = require('./routes/auth.routes');
const orderRoutes = require('./routes/order.routes');
const app = express();

//middleware
app.use(express.json())

//Port
const PORT = process.env.PORT || 4000;

//routes

app.use('/api', userRouter);
app.use('/api', filmRouter);
app.use('/api', authRoutes);
app.use('/api', orderRoutes);

app.get('/', (req, res)=> {
    return res.send('Bienvenidos al videoclub');
});

app.get('*',(req,res)=>{
    return res.status(404).send('404 route not found')
})

//connect database

db().then(()=>{
app.listen(PORT, ()=> console.log('Server is running in ' + PORT));
}).catch((error)=>{
    console.log('Error connecting to mongoDB ', error);
})
