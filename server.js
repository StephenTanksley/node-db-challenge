const express = require('express');

const projectRouter = require('./data/routes/projects')
const resourcesRouter = require('./data/routes/resources')
const taskRouter = require('./data/routes/tasks')

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);

module.exports = server;