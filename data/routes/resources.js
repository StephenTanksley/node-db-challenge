const express = require('express')
const resources = require('./models/resources-model')

const router = express.Router()
const id = req.params.id

router.get('/', async (req, res, next) => {
    try {
        res.json(await resources.get())
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.json(await resources.getById(id))
    }
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    res.json(await resources.addResource(req.body))
})