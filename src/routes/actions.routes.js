import { Router } from 'express'
const router = Router()

// Database connection
import { connect } from '../database'
import { ObjectID } from 'mongodb'

router.get('/', async (req, res) => {
    const db = await connect()
    const result = await db.collection('actions').find({}).toArray();
    console.log(result)
    res.json(result)
})

router.post('/', async (req, res) => {
    const db = await connect()

    const action = {
        nickname: req.body.nickname,
        score: req.body.score
    }

    const result = await db.collection('actions').insert(action)
    console.log(result)
    res.json(result.ops[0])
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const db = await connect()
    const result = await db.collection('actions').findOne({_id: Object(id)})
    res.json(result)
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const db = await connect()

    const result = await db.collection('actions').deleteOne({ _id: ObjectID(id)})
    res.json({
        message: `Action ${id} deleted`,
        result
    })
})

// put

export default router