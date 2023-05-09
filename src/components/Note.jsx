import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import '../index.css'
const Note = ({id,text,date,handledeletenote}) => {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever  className='delete-icon' size="1.3em" onClick={()=>handledeletenote(id)}/>
        </div>
    </div>
  )
}

export default Note