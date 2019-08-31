const router = require('express').Router();
let Album = require('../models/album.model');

router.route('/').get((req, res) => {
    Album.find()
    .then(albums => res.json(albums))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
    const albumName = req.body.albumName;
    const bandName = req.body.bandName;
    const year = req.body.year;
    const label = req.body.label;

    const newAlbum = new Album({albumName, bandName, year, label});

    newAlbum.save()
    .then(() => res.json('Album added!'))
    .catch(error => res.status(400).json('Error: '+ error));
});

router.route('/:id').get((req, res) => {
    Album.findById(req.params.id)
    .then(album => res.json(album))
    .catch(error => res.status(400).json('Error: ' + error));    
});

router.route('/:id').delete((req, res) => {
    Album.findByIdAndDelete(req.params.id)
    .then(() => res.json('Album deleted.'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
    Album.findById(req.params.id)
    .then(album => {
        album.albumName = req.body.albumName;
        album.bandName = req.body.bandName;
        album.year = Number(req.body.year);
        album.label = req.body.label;

        album.save()
        .then(() => res.json('Album updated!'))
        .catch(error => res.status(400).json('Error: ' + error));
    });
});

module.exports = router;