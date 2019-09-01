const router = require('express').Router();
let Band = require('../models/band.model');

router.route('/').get((req, res) => {
    Band.find()
    .then(bands => res.json(bands))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:bandName').get((req, res) => {
    Band.findOne({bandName: req.params.bandName})
    .then(band => res.json(band))
    .catch(error => res.status(400).json('Error: '+ error))

})

router.route('/add').post((req, res) => {
    const bandName = req.body.bandName;

    const newBand = new Band({bandName});

    newBand.save()
    .then(() => res.json('Band added!'))
    .catch(error => res.status(400).json('Error: '+ error));
});

module.exports = router;