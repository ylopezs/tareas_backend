const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.set('useCreateIndex', true);

const userSchema = new Schema({
    titulo: {
        type: String,
        require: false,
        trim: true
    },
    prioridad: {
        type: String,
        require: false,
        trim: true
    },
    vencimiento: {
        type: Date,
        require: true,
        trim: true
    },
    finalizado:{
        type: Boolean
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
},{
    timestamps: true
});

module.exports = userSchema;
