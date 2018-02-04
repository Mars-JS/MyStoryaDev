const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,
    facebookId: String,
    credits: { type: Number, default: 0 },
    booksRemain: {type: Number, default: 4 },
    
});

mongoose.model('users', userSchema);