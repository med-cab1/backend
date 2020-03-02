const express = require('express');

const router = express.Router();

const Users = require('./users-model');

// retrieve users
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(401).json({ errorMessage: err });
        });
});



// delete user
router.post('/:id', (req, res) => {
    const { id } = req.params;
    Users.remove(id)
        .then(del => {
            res.status(201).json({ deletedId: del })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err });
        });
});

module.exports = router;