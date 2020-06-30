const mongoose = require('mongoose');
const tareaSchema = require('./tareaModel');

tareaSchema.statics = {
    create : function(data, cb) {
        var tarea = new this(data);
        tarea.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

const tarea = mongoose.model('Tarea', tareaSchema);
module.exports = tarea;