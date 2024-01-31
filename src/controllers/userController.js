const createError = require("http-errors");
const Users = require("../models/Usermodel");

const getUsers = (req, res, next) => {
    try{
        res.status(200).send({
            message: 'Users Returned Successfully',
            data:Users
          });
    }catch(err){
        next(err);
    }
  };




  module.exports = {getUsers};