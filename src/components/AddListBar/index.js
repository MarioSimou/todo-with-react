import React , { useState , useRef } from 'react'

const AddListBar = ({ addTask }) => {
    const [ value , setValue ] = useState('')
    const input = useRef( null )

    const onSubmitForm = e => {
        e.preventDefault();
        addTask( input.current.value );
    }

    return (
        <div className="sixteen wide column ui grid">
            <div className="two wide column"></div>
            <div className="twelve wide column">
                <form id="add-list-bar" onSubmit={ onSubmitForm }> 
                    <div className="field ui transparent input">
                        <input type="text" 
                               value={ value } 
                               onChange={ e => setValue( e.target.value ) }
                               id="input-add-list"
                               ref={ input }
                               />
                    </div>
                    <div className="field">
                        <button className="ui green inverted button right floated">Submit</button>
                    </div>
                </form>
            </div>
            <div className="two wide column"></div>
        </div>
    )
}

export default AddListBar