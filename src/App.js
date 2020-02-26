import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import axios from 'axios'
import './App.css'




const App = () => {
    const [laskuri, setLaskuri] = useState(0)
    const [showAll, setShowAll] = useState(true)
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('initial value for newNote input')

    const axiosHook = () => {
        console.log('effect happening, axios going to get')
        axios
            .get('http://localhost:3001/notes')
            .then(res => {
                console.log('axios thenning')
                setNotes(res.data)
        })
    }
    useEffect(axiosHook, []) // empty arr = only runs on first render
    console.log('renderr', notes.length, 'notes')


    // filter notes with important or all
    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
    const rows = () => notesToShow.map(note => {
        // don't use key from map(value, key) as key, might roll over to wrong element on delete
        return <Note key={note.id} note={note} />
    })

    //basic event handler
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const addNote = (event) => {
        event.preventDefault()

        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id:notes.length + 1
        }
        setNotes(notes.concat(noteObject))
        setNewNote('')
        setLaskuri(laskuri +1)
    }

    return (
        <>
            <h1>hop! {laskuri}</h1>
            <span>{[1,2,3]}</span>
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