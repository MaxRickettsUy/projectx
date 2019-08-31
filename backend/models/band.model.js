const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bandSchema = new Schema({
    bandName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true
});



const Band = mongoose.model('Band', bandSchema);

module.exports = Band;