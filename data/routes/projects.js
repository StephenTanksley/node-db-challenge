const express = require('express')
const projects = require('./models/projects-model')

const router = express.Router()
const id = req.params.id


router.get('/', async (req, res, next) => {
    try {
        res.json(await projects.get())
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.json(await projects.getById(id))
    }
    catch (error)
    {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    res.json(await projects.addProject(req.body))
})

module.exports = router