import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'

const app = express();
const router = express.Router();
const port = 3000;

app.use(cors({ origin: "http://localhost:4200" }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

router.get('/', (request: Request, response: Response) => {
    response.json({ info: 'Karta Software Node.js, Express, and Postgres API' })
})

