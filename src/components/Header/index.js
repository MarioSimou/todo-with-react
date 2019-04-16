import React from 'react'

const Header = ({ id , content }) => {
    return (
        <div className="ui inverted segment sixteen wide column" id={ `${ id }`} >
            <div className="ui aligned center ui yellow inverted header">{ content } </div>
        </div>
    )
}

export default Header