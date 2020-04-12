import { renderTodos } from './views'
import { createTodo, saveTodos } from './todos'

const filterInput = document.querySelector('#filter-input')
const addForm = document.querySelector('form')
const hideCheckbox = document.querySelector('#hide-completed')

renderTodos()

// Set up search text handler
filterInput.addEventListener('input', () => {
})

// Set up checkbox handler
hideCheckbox.addEventListener('change', () => {
})

// Set up form submission handler
addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newTodo = e.target.elements.addInput.value.trim()

    if(newTodo.length > 0){
        createTodo(newTodo)
        saveTodos()
        renderTodos()
        e.target.elements.addInput.value = ''
    }
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) =>{
})