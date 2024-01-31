const mongoose = require('mongoose');
const {mongoDB} = require('../secret');

const connectDB =async (options ={}) => {
    try {
        await mongoose.connect(mongoDB,options);
        console.log('Connected to database');
        mongoose.connection.on('error', (error)=>{
            console.error("DB connection error: ", error)
        })
    } catch (error) {
        console.error("Could not Connect to DB: ", error.toString())
    }
}

module.exports = connectDB;