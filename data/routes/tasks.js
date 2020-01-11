const express = require('express')
const tasks = require('./models/tasks-model')

const router = express.Router()
const id = req.params.id

router.get('/', async (req, res, next) => {
    try {
        res.json(await tasks.get())
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.json(await tasks.getById(id))
    }
    catch (error)
    {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    res.json(await tasks.addProject(req.body))
})

module.exports = router