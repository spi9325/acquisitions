//  this is for your setup express application
import express from 'express'

const app = express();


app.get('/', (req, res)=>{
    res.status(200).send('hello from acquisations')
})

export default app;
