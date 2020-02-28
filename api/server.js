const express = require('express');

// import middleware
const helmet = require('helmet');
const cors = require('cors');
const authenticate = require('../auth/authenticate-middleware');

// set up server
const server = express();

// global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

// import routers
authRouter = require('../auth/auth-router');

// base route
server.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome" })
})

// implement routers
server.use('/api/auth', authRouter);

module.exports = server;


