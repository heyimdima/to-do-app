import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { Todo } from './todo';
import { pool } from './query-config';

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
  response.json({ info: 'To-Do App Backend' })
})


router.post('/todo', createTodo)
router.delete('/todo/:todoID', deleteTodo)
router.get('/todo/:todoID', getTodo)
router.get('/todos', getTodos)
router.put('/todo/:todoID', updateTodo)

async function createTodo(request: Request, response: Response, next: NextFunction) {
  const todo = request.body as Todo
  // const randomID = Math.floor(Math.random() * 100000000);

  // todo.id = randomID
  todo.completed = false;

  pool.query('SELECT create_todo($1, $2)', [todo.content, todo.completed]).then(
    
    query => response.status(200).json(query.rows)

  )
}

async function deleteTodo(request: Request, response: Response, next: NextFunction) {

  const todoID = parseInt(request.params.todoID)

  pool.query('DELETE FROM todos WHERE id = $1', [todoID]).then(

    query => response.status(200).json(query.rows)

  )

}

async function getTodo(request: Request, response: Response, next: NextFunction) {
  const todoID = parseInt(request.params.todoID)

  pool.query('SELECT * FROM todos WHERE id = $1;', [todoID]).then(

    query => response.status(200).json(query.rows[0])

  )

}

async function getTodos(request: Request, response: Response, next: NextFunction) {

  pool.query('SELECT * FROM todos ORDER BY id desc;', []).then(

    query => response.status(200).json(query.rows)

  )

}

async function updateTodo(request: Request, response: Response, next: NextFunction) {
  const todo = request.body as Todo

  if (todo.completed == false) {

    pool.query('UPDATE todos SET completed = TRUE WHERE id=$1;', [todo.id]).then(

      query => response.status(200).json(query.rows)

    )

  } else {

    pool.query('UPDATE todos SET completed = FALSE WHERE id=$1;', [todo.id]).then(

      query => response.status(200).json(query.rows)

    )

  }

}