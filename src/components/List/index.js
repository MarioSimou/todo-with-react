import React,  { useRef , useState  } from 'react'
import EditButton from '../EditButton'
import DeleteButton from '../DeleteButton'

const List = ({ content }) => {
    const list = useRef( null );
    const textBar = useRef( null );
    const [ edit , setEdit ] = useState( false )
    const [ c , setContent ] = useState( content )

    const onSubmitEdit = ( e ) => {
        e.preventDefault();
        const { value } = textBar.current
        if( value){
            setContent( textBar.current.value )
            setEdit( false )            
        }
    }
    const decideEdit = ( onSubmitEdit ) => {
        switch ( edit ){
            case true:
                return (
                    <form onSubmit={ onSubmitEdit }>
                        <input type="text" id="edit-field" ref={ textBar } autoFocus />
                    </form>
                )
            default:
                return (
                    <div className="description">{ c  }</div>
                )
                
        } 
    }

    return (

        <div className="ui list" ref={ list } >
            <div className="item">
                <div className="right floated">
                    <DeleteButton onClickDelete={ e => list.current.remove() } />
                </div>
                <div className="right floated">
                    <EditButton onClickEdit={ e => setEdit( true ) } />
                </div>
                { decideEdit( onSubmitEdit ) }
            </div>
        </div>
    )
}

export default List