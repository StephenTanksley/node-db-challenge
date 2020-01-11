const db = require('../../db-config')

const get = async () => {
    const resources = await db('resources')
    return resources.map((resource) => {
        return {...resource, completed: resource.completed === 1 ? true : false}
    })
}

const getById = async (id) => {
    return await db('resources').where({ id })
}

const addResource = async (resource) => {
    const [id] = await db('resources').insert(resource)
    return await getById(id)
}

module.exports = {
    get,
    getById,
    addResource
}