import { v4 as uuidv4 } from 'uuid';

const todos = []

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todo')

    try{
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch(e){
        return []
    }
}

const saveTodos = () => {
    localStorage.setItem('todo', JSON.stringify(objName))
}

const getTodos = () => todos

const createTodo = (todoText) => {
    todos.push({
        id: uuidv4(),
        text: todoText,
        completed: false
    })
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
     
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (id) => {
    const matchTodo = todos.find((todo) => todo.id === id)

    if (matchTodo) {
        matchTodo.completed = !matchTodo.completed
    }
}

loadTodos()

export { loadTodos, saveTodos,  getTodos, createTodo, removeTodo, toggleTodo }