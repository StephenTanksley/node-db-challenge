const db = require('../../db-config')

const get = async () => {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.id', 'p.id')
        .select('p.name', 'p.description', 'p.completed', 't.description', 't.notes', 't.completed')
        return tasks.map((task) => {
            return {...task, completed: task.completed === 1 ? true : false}
        })
}

const getById = async (id) => {
    const [task] = await db('tasks as t')
        .where('t.id', id)
        .join('projects as p', 't.project_id', 'p.id').select('p.name', 't.description', 't.notes', 't.completed', )
        return {...task, completed: task.completed === 1 ? true : false}
}

const addTask = async (task) => {
    const [id] = await db('tasks').insert(task)
    return await getById(id)
}


module.exports = {
    get,
    getById,
    addTask
}