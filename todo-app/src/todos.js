import { v4 as uuidv4 } from 'uuid';

let todos = []

// Fetch existing todos in local-storage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todo')

    try{
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch(e){
        todos = []
    }
}

// Save todos to local-storage
const saveTodos = () => {
    localStorage.setItem('todo', JSON.stringify(todos))
}

// Get Todos
const getTodos = () => todos

// Create new todo
const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text: text,
        completed: false
    })
    saveTodos()
}

// Remove todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
     
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// show/hide incompleted
const toggleTodo = (id) => {
    const matchTodo = todos.find((todo) => todo.id === id)

    if (matchTodo) {
        matchTodo.completed = !matchTodo.completed
        saveTodos()
    }
}

loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo, saveTodos }