const todos = [
    {
        text: 'Design webapp',
        completed: true
    },
    {
        text: 'Build Markup',
        completed: true
    },
    {
        text: 'React Integration',
        completed: false
    },
    {
        text: 'Build & Design API',
        completed: true
    },
    {
        text: 'Deploy webapp',
        completed: false
    }
]

const deleteTodo = function (obj, todoText) {
    const index = obj.findIndex(function(item) {
        return item.text.toLowerCase() === todoText.toLowerCase()
    })
    index > -1 ? obj.splice(index, 1) : null
    return index
}

const getThingsTodo = (obj) =>{
    return obj.filter(function (item){
        return !item.completed
    })
}

const sortTodos = (obj) =>{
    return obj.sort(function (pending, done){
        if (!pending.completed && done.completed){
            return -1
        } else if (!done.completed && pending.completed){
            return 1
        } else{
            return 0
        }
    })
}

console.log(sortTodos(todos));