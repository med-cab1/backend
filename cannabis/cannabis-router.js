const express = require('express');
const axios = require('axios');

const router = express.Router();

const Cannabis = require('../cannabis/cannabis-model');

// retrieve effects
router.get('/effects', (req, res) => {

    Cannabis.getEffects()
        .then(effects => {
            res.status(200).json(effects);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err });
        });
});

// retrieve flavors
router.get('/flavors', (req, res) => {

    Cannabis.getFlavors()
        .then(flavors => {
            res.status(200).json(flavors);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err });
        });
});

// retrieve conditions
router.get('/conditions', (req, res) => {

    Cannabis.getConditions()
        .then(conditions => {
            res.status(200).json(conditions);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err });
        });
});

// retrieve recommendations by user
router.get('/:id/recommendations', (req, res) => {
    const { id } = req.params;

    Cannabis.getRecommendations(id)
        .then(recommendations => {
            res.status(200).json(recommendations);
        })
        .catch(err => {
            res.status(404).json({ errorMessage: err })
        });
});

// post recommendations by user
router.post('/:id/recommendations', (req, res) => {
    const { id } = req.params;
    let info = req.body;
    info.user_id = id;

    Cannabis.addRecommendations(info)
        .then(recommendations => {
            res.status(200).json(recommendations);
        })
        .catch(err => {
            res.status(404).json({ errorMessage: err })
        });
});

router.post('/prediction', (req, res) => {
    let info = req.body;
    let queryString = `https://unburied-medcab.herokuapp.com/prediction?disease=${info[0]}&effect1=${info[4]}&effect2=${info[5]}&effect3=${info[6]}&effect4=${info[7]}&effect5=${info[8]}&flavor1=${info[1]}&flavor2=${info[2]}&flavor3=${info[3]}`

    axios.get(queryString)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            res.status(404).json({ errorMessage: err.message, info: req.body, request: queryString })
        })
});

// router.post('/prediction', (req, res) => {
//     let info = req.body;

//     axios.post(`https://unburied-medcab.herokuapp.com/altpredict`, info)
//         .then(res => {
//             res.status(201).json(res);
//         })
//         .catch(err => {
//             res.status(404).json({ errorMessage: err, info: req.body})
//         })
// });
module.exports = router;