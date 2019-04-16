import React from 'react'

const DeleteButton = ({  onClickDelete }) => {

    return (
        <div className="ui inverted red button"
            onClick={ onClickDelete }
        >Delete</div>
    )
}

export default DeleteButton