import express from 'express';
import dotenv from 'dotenv'; 
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();


const PORT = process.env.PORT;


const app = express();

app.use(cookieParser());
// cookie parseer will parse the data from the cookie that it will get from the frontend 
app.use(express.json());
// express.json() helps us to get all the data in json format that we'll get from the frontend

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

mongoose.connect(process.env.MONGO_URI, {dbName: 'yogi-mern-blog'})
.then(()=> console.log('connected to database'))
.catch(err => console.log('databse connection failed', err))

app.listen(PORT , ()=>{
    console.log('server is running on port: ', PORT) ;
})

