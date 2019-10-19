const router = require('express').Router();
let Album = require('../models/album.model');

//get all albums
router.route('/').get((req, res) => {
    Album.find()
    .then(albums => res.json(albums))
    .catch(error => res.status(400).json('Error: ' + error));
});

//get all albums by band
router.route('/:bandName').get((req, res) => {
    Album.find({bandName: req.params.bandName})
    .then(albums => res.json(albums))
    .catch(error => res.status(400).json('Error: ' + error))
})

//add one album
router.route('/add').post((req, res) => {
    const albumName = req.body.albumName;
    const bandName = req.body.bandName;
    const tracks = req.body.tracks;
    const year = req.body.year;
    const label = req.body.label;

    const newAlbum = new Album({albumName, bandName,  tracks, year, label});

    newAlbum.save()
    .then(() => res.json('Album added!'))
    .catch(error => res.status(400).json('Error: '+ error));
});

//get album by id
router.route('/:id').get((req, res) => {
    Album.findById(req.params.id)
    .then(album => res.json(album))
    .catch(error => res.status(400).json('Error: ' + error));    
});


//delete album by id
router.route('/:id').delete((req, res) => {
    Album.findByIdAndDelete(req.params.id)
    .then(() => res.json('Album deleted.'))
    .catch(error => res.status(400).json('Error: ' + error));
});


//update album by id
router.route('/update/:id').post((req, res) => {
    Album.findById(req.params.id)
    .then(album => {
        album.albumName = req.body.albumName;
        album.bandName = req.body.bandName;
        album.tracks = req.body.tracks;
        album.year = Number(req.body.year);
        album.label = req.body.label;

        album.save()
        .then(() => res.json('Album updated!'))
        .catch(error => res.status(400).json('Error: ' + error));
    });
});

module.exports = router;