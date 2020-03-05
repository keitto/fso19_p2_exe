import React from 'react'

const Notification = ({message}) => {
    if(message === null) {
        return null;
    }

    return (
        <div className="notification">
            {message}
        </div>
    )
}

// const Notification = (props) => { // can also do with (props)
//     if(props.message === null) {
//         return null;
//     }

//     return (
//         <div className="notification">
//             {props.message}
//         </div>
//     )
// }

export default Notification
