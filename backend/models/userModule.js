const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        isAdmin: {
            type: Boolean,
            require: true,
            default: false
        },
        pic: {
            type: String,
            require: true,
            default: 'https://st2.depositphotos.com/5682790/10456/v/380/depositphotos_104564156-stock-illustration-male-user-icon.jpg?forcejpeg=true'
        },
    },
    {
        timestamps: true
    },
);

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


const User= mongoose.model('User',userSchema);

module.exports= User;