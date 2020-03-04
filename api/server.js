const express = require('express');

// import middleware
const helmet = require('helmet');
const cors = require('cors');
const authenticate = require('../auth/authenticate-middleware');
const morgan = require('morgan');

// set up server
const server = express();

// global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan('combined'));

// import routers
authRouter = require('../auth/auth-router');
usersRouter = require('../users/users-router');

// base route
server.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome" })
})

// implement routers
server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter);

module.exports = server;


