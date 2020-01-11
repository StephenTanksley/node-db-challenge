const express = require('express');

const projectRouter = require('./data/routes/projects')
const resourcesRouter = require('./data/routes/resources')
const taskRouter = require('./data/routes/tasks')

const server = express();
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', taskRouter)

server.use((req, res) => {
    res
        .status(404)
        .json({ message: "Route was not found." })
    })

server.use((err, req, res, next) => {
    console.log(err)
    res
        .status(500)
        .json({ message: "An internal error occurred." })
    })


module.exports = server;