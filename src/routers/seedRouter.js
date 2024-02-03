const seedRouter = require('express').Router();
const seedUser = require('../controllers/seedController');


seedRouter.post("/users", seedUser);




module.exports = seedRouter;