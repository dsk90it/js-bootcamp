'use strict'

// Get back data from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todo')

    try{
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch(e){
        return []
    }
}

// Save data to localStorage
const saveTodos = (objName) => {
    localStorage.setItem('todo', JSON.stringify(objName))
}

// Remove Todo
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

// Render todo's
const renderTodos = (obj, filters) => {
    // find matches
    let filteredTodos = obj.filter((item) => {
        const searchTextMatch = item.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const inCompletedMatch = !filters.hideCompleted || !item.completed
        return searchTextMatch && inCompletedMatch
    })
     
    // items left
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    const plural = incompleteTodos.length <= 1 ? '' : 's'
    document.querySelector('h3').classList.add('list-title')
    document.querySelector('h3').innerHTML = ''
    document.querySelector('h3').innerHTML += `You have ${incompleteTodos.length} todo${plural} left`
    
    todoEl.innerHTML = ''

    if(filteredTodos.length > 0){
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateListDom(todo))
        })
    } else {
        todoEl.innerHTML = `<p class="empty-message ">No todos to show!</p>`
    }
}

// Generate listDOM
const generateListDom = (item) => {
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
        console.log(`CURRENT ITEM : ${item.id}`);
        toggleTodo(item.id)
        saveTodos(todos)
        renderTodos(todos, filters)
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
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return list
}
