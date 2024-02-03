require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 8000;
const mongoDB= process.env.MONGODB_URI || 'mongodb://localhost:27017/e-commerce';
const defaultUserImage = process.env.DEFAULT_USER_IMAGE || '../public/Image/User/DefaultUser.png'





module.exports = {serverPort, mongoDB, defaultUserImage};