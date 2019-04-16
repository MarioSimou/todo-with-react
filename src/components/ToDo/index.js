import React from 'react'

const Todo = ({ children }) => {
    console.log( children )
    return (
        <div className="sixteen wide column">
            <div className="ui grid">
                <div className="two wide column"></div>
                <div className="twelve wide column">
                    {  children }
                </div>
                <div className="two wide column"></div>
            </div>
        </div>
    )
}

export default Todo