import React from 'react'
import Header from '../Header'
import Todo from '../Todo'
import List from '../List'

const App = props => {
    return (
        <div className="ui grid">
            <Header id="todo" content="Hooks in Function-based Components with React" />
            <Todo>
                <List content="I need to eat" header="eat" ></List>
                <List content="I need to sleep" header="sleep" ></List>
                <List content="I need to code" header="code"></List>
            </Todo>
        </div>
    )
}

export default App