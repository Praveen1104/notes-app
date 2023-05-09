import React from 'react'

const Header = ({handledarkmode}) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={()=>handledarkmode((previous)=>!previous)} className='save'>Toggle</button>
    </div>
  )
}

export default Header