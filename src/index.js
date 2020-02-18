import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const notes = [
    {
        id:1,
        content:"html",
        date:'2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id:2,
        content:"browser",
        date:'2019-05-30T18:12:31.098Z',
        important: false
    },
    {
        id:3,
        content:"get+post",
        date:'2019-05-30T19:20:14.098Z',
        important: true
    }
];



const App = (props) => {
    const {notes} = props
    return (
        <>
            <h1>hop!</h1>
            <span>{[1,2,3]}</span>
            <ul>
                {
                    notes.map((note, key) => <li key={key}>{note.content}</li>)
                }
            </ul>
        </>
    )

}


ReactDOM.render(<App notes={notes}/>, document.getElementById('root'));
