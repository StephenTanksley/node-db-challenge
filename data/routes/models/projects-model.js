const db = require('../../db-config')

const task = require('../models/tasks-model')
const resources = require('../models/resources-model')

const get = async () => {
    const projects = await db('projects')
    return projects.map((project) => {
        return {...project, completed: project.completed === 1 ? true : false}
    })
}

const getById = async (id) => {
    const project = await db('projects')
        .where({ id })
        .first()
    return {...project, completed: project.completed === 1 ? true : false}
}

const addProject = async (project) => {
    const [id] = await db('projects').insert(project)
    return await getById(id)
}


module.exports = {
    get, 
    getById,
    addProject
}