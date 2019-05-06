import express from 'express'

const app = express()


// settings
app.set('port', process.env.PORT || 4000)

// routes
import inRouter from './routes/index.routes'
import actionRouter from './routes/actions.routes'

//middlewares
app.use(express.json());

app.use(inRouter)
app.use('/action' ,actionRouter)


export default app