import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
/*
const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/pask')
console.log(promise2)

promise.then(response => {
    console.log("p1:", response)
})
promise2.then(response => {
    console.log("p2:", response)
})

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
*/
ReactDOM.render(<App />, document.getElementById('root'));