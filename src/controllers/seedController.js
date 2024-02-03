const data = require('../../data');
const User = require('../models/Usermodel');

const seedUser = async (req, res, next) => {
    try {
        // Delete all existing Users
        await User.deleteMany({});
        
        // Inserting All Users
        const allUsers = await User.insertMany(data.users);
        
        // Creating Successfully
        res.status(201).json(allUsers);
    } catch (error) {
        next(error);
    }
}

module.exports = seedUser;