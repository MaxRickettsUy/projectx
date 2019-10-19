const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    albumName: {type: String, require: true},
    bandName: {type: String, require: true},
    tracks: [String],
    year: {type: Number, required: true},
    label: {type: String, required: false}
},{
    timestamps: true
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;