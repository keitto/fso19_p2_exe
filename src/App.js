import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import './App.css'

const App = () => {
    const [laskuri, setLaskuri] = useState(0)
    const [showAll, setShowAll] = useState(true)
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('initial value for newNote input')

    useEffect(() => {
        noteService.getAll()
            .then(initNotes => {setNotes(initNotes)})
    }, []) 
    console.log('renderr', notes.length, 'notes')

    // filter notes with important or all
    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
    const rows = () => notesToShow.map(note => {
        // don't use key from map(value, key) as key, might roll over to wrong element on delete
        return <Note 
            key={note.id} 
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
        />
    })

    //basic event handler
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const toggleImportanceOf = id => {
        const url = 'http://localhost:3001/notes/'+id
        const theNote = notes.find(aNote => aNote.id === id) // find takes function wtf
        const updatedNote = {...theNote, important: !theNote.important}
        
        noteService.update(id, updatedNote)
            .then(upNote => setNotes(notes.map(note => note.id !== updatedNote.id ? note : updatedNote)))
    }

    // adding
    const addNote = (event) => {
        event.preventDefault()

        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: 0 //Math.random() > 0.5,
        }

        noteService.create(noteObject)
            .then(newNote => (setNotes(notes.concat(newNote))))
        setLaskuri(laskuri +1)
    }

    return (
        <>
            <h1>hop! {laskuri}</h1>
        <button onClick={() => setShowAll(!showAll)} >show {showAll ? 'important' : 'all'}</button>
            <ul>
                {rows()}
            </ul>
            <form onSubmit={addNote}> 
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">k</button>
            </form>
        </>
    )

}

export default App