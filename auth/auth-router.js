const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');
const authenticate = require('./authenticate-middleware');

const express = require('express');

const router = express.Router();

const Users = require('../users/users-model');

// register
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            const token = genToken(saved);
            res.status(201).json({ username: saved.username, token: token});
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err});
        });
});

router.post('/login', (req, res) => {
    let { username, password} = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = genToken(user);
                res.status(200).json({ username: user.username, token: token })
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err });
        });
});

function genToken(user) {
    const payload = {
        userid: user.id,
        username: user.username
    };

    const options = { expiresIn: '1h' };

    const token = jwt.sign(payload, secrets.jwtSecret, options);

    return token;
};

module.exports = router;