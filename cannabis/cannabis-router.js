const express = require('express');

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

module.exports = router;