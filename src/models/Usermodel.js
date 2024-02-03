const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { defaultUserImage } = require('../secret');

const userSchema = new Schema({
    name:{
        type: 'string',
        required: [true, 'Name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [30, 'Name must be at most 50 characters long']
    },
    email:{
        type: 'string',
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(value){
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
            },
            message:`Please Enter a valid email address!`
        }
    },
    password:{
        type: 'string',
        required: [true, 'Password is required'],
        minlength: [6, 'Name must be at least 6 characters long'], 
        set:(value)=> bcrypt.hashSync(value, bcrypt.genSaltSync(10))
    },
    image:{
        type: 'string',
        default:defaultUserImage,
    },
    address:{
        type: String,
        required: [true, 'Address is required'],
    },
    phone:{
        type: 'string',
        required: [true, 'Phone is required'],
    },
    isAdmin:{
        type: Boolean,
        required: false,
    },
    isBanned:{
        type: Boolean,
        required: false,
    },

}, {timestamps: true}); 

const User = model('User', userSchema);

module.exports = User;