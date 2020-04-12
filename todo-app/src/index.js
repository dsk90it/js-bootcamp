import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

renderTodos()

// Search todo
document.querySelector('#filter-input').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Add todo
document.querySelector('form').addEventListener('submit', (e) => {
    const text = e.target.elements.addInput.value.trim()
    e.preventDefault()

    if(text.length > 0){
        createTodo(text)
        renderTodos()
        e.target.elements.addInput.value = ''
    }
})

// Toggle todo
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if(e.key === "todo"){
        loadTodos()
        renderTodos()
    }
})