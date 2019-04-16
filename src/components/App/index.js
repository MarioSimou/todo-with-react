import React,  { useState } from 'react'
import Header from '../Header'
import Todo from '../Todo'
import List from '../List'
import AddListBar from '../AddListBar'

const App = props => {
    const [ tasks , setTask ] = useState([{ content : 'I need to eat' }])
    const addTask = ( v ) => {
        if ( v) setTask( [...tasks , { content : v } ] )
    } 

    const renderTasks = tasks => {
        console.log(tasks)
        if( tasks.length > 0 ){
            return tasks.map( (t,i) => {
                return (
                    <List content={ t.content} key={ i } />
                )
            })
        } return (<div className="ui active centered inline loader"></div>)
    }

    return (
        <div className="ui grid">
            <Header id="todo" content="Hooks in Function-based Components with React" />
            <AddListBar addTask={ addTask }  />
            <Todo>
                { renderTasks( tasks ) }
            </Todo>
        </div>
    )
}

export default App