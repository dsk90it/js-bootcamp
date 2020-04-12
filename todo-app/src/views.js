import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

const renderTodos = () => {
    const filters = getFilters()
    const todoEl = document.querySelector('#todos')
    // find matches
    const filteredTodos = getTodos().filter((item) => {
        const searchTextMatch = item.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const inCompletedMatch = !filters.hideCompleted || !item.completed
        return searchTextMatch && inCompletedMatch
    })
    const incompletedTodos = filteredTodos.filter((todo) => !todo.completed)
    
    generateSummaryDOM(incompletedTodos)
    
    todoEl.innerHTML = ''

    if(filteredTodos.length > 0){
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        todoEl.innerHTML = `<p class="empty-message">No todos to show!</p>`
    }
}

// Generate listDOM
const generateTodoDOM = (item) => {
    const list = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const itemText = document.createElement('span')
    const removeButton = document.createElement('button')

    // add classes
    list.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    removeButton.classList.add('button', 'button--text')

    // Checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(item.id)
        renderTodos()
    })

    // todo-text
    itemText.innerText = item.text
    containerEl.appendChild(itemText)

    list.appendChild(containerEl)

    // remove button
    list.appendChild(removeButton)
    removeButton.textContent = 'remove'
    removeButton.addEventListener('click', () => {
        removeTodo(item.id)
        renderTodos()
    })

    return list
}

// Generate incompleted todo
const generateSummaryDOM = (incompletedTodos) => {
    const plural = incompletedTodos.length <= 1 ? '' : 's'
    document.querySelector('h3').classList.add('list-title')
    document.querySelector('h3').innerHTML = ''
    document.querySelector('h3').innerHTML += `You have ${incompletedTodos.length} todo${plural} left`
}

export { renderTodos, generateTodoDOM, generateSummaryDOM }