import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { Todo } from './todo';
import crypto from 'crypto'

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

const todos: Todo[] = [
  {id: 1, content: 'test', completed: false}
]


router.post('/todo', createTodo)
router.delete('/todo/:todoID', deleteTodo)
router.get('/todo/:todoID', getTodo)
router.get('/todos', getTodos)
router.put('/todo/:todoID', updateTodo)

async function createTodo(request: Request, response: Response, next: NextFunction) {
  const todo = request.body as Todo
  const randomID = Math.floor(Math.random() * 100000000);

  todo.id = randomID
  todo.completed = false;

  todos.push(todo)

  response.status(201).json(todos)
}

async function deleteTodo(request: Request, response: Response, next: NextFunction) {
  const todoID = parseInt(request.params.todoID)
  const todoIndex = todos.findIndex(todo => todo.id == todoID)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)

    response.status(200).send()
  } else {
    response.status(404).send()
  }
}

async function getTodo(request: Request, response: Response, next: NextFunction) {
  const todoID = parseInt(request.params.todoID)
  const todo: Todo = todos.find(todo => todo.id == todoID)

  if (todo) {
    response.status(200).json(todo)
  } else {
    response.status(404).send()
  }
}

async function getTodos(request: Request, response: Response, next: NextFunction) {
  response.status(200).json(todos)
}

async function updateTodo(request: Request, response: Response, next: NextFunction) {
  const todoID = parseInt(request.params.todoID)
  const todoIndex = todos.findIndex(todo => todo.id == todoID)
  const todo = request.body as Todo

  if (todoIndex > -1) {
    todos[todoIndex] = todo

    response.status(200).send()
  } else {
    response.status(404).send()
  }
}