'use strict'

// DOM Selectors
const filterInput = document.querySelector('#filter-input')
const addForm = document.querySelector('form')
const addButton = document.querySelector('#add-btn')
const todoEl = document.querySelector('#todos')
const hideCheckbox = document.querySelector('#hide-completed')
const filters = {
    searchText: '',
    hideCompleted: false
}

let todos = getSavedTodos()

renderTodos(todos, filters)

// Search todo
filterInput.addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Add todo
addForm.addEventListener('submit', (e) => {
    let newTodo = e.target.elements.addInput.value.trim()
    e.preventDefault();
    if(newTodo.length > 0){
        todos.push({
            id: uuidv4(),
            text: newTodo,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.addInput.value = ''
    }
    
})

hideCheckbox.addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})