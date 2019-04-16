import React from 'react'

const EditButton = ({ onClickEdit }) => {
    return (
        <div className="ui inverted yellow button"
             onClick={ onClickEdit }
        >Edit</div>
    )
}

export default EditButton