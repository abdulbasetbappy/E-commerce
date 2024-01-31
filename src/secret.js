require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 8000;
const mongoDB= process.env.MONGODB_URI || 'mongodb://localhost:27017/e-commerce';






module.exports = {serverPort, mongoDB};