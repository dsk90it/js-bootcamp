import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote } from "./notes";

const hashId = location.hash.substring(1)
const editTitle = document.querySelector('#edit-title')
const editBody = document.querySelector('#edit-body')
const lastEdited = document.querySelector('#last-edited')
const editRemoveBtn = document.querySelector('#remove-edit-note')

initializeEditPage(hashId)

editTitle.addEventListener('input', (e) => {
    const currentNote = updateNote(hashId, {
        title: e.target.value
    })
    lastEdited.textContent = generateLastEdited(currentNote.updatedAt)
})

editBody.addEventListener('input', (e) => {
    const currentNote = updateNote(hashId, {
        body: e.target.value
    })
    lastEdited.textContent = generateLastEdited(currentNote.updatedAt)
})

editRemoveBtn.addEventListener('click', () => {
    removeNote(hashId)
    location.assign('index.html')
})

window.addEventListener('storage', (e) =>{
    if(e.key === 'notes'){
        initializeEditPage(hashId)
    }
})