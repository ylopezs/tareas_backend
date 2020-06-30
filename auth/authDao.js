const mongoose = require('mongoose');
const authSchema = require('./authModel');

authSchema.statics = {
    create: function(newUser, cb) {
        const user = new this(newUser);
        user.save(cb);
    },
    login: function (query, cb) {
        this.find(query, cb);
    }
}

const authModel = mongoose.model('Users', authSchema);

module.exports = authModel;