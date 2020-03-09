const express = require('express');

const router = express.Router();

const Users = require('./users-model');
const cannabisRouter = require('../cannabis/cannabis-router');

router.use('/cannabis', cannabisRouter);

// retrieve users
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(401).json({ errorMessage: err });
        });
});
// Update User
router.put('/:id', (req, res) => {
    const { id } = req.params;
    let changes = req.body;

    if (changes.password) {
        const hash = bcrypt.hashSync(changes.password, 10);
        changes.password = hash;
    }
    

    Users.update(changes, id)
        .then(user => {
            res.status(201).json({ user: user })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err });
        });
});

// delete user
router.delete('/:id', (req, res) => {
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