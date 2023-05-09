import React, { useState } from "react";

const Addnote = ({handleaddnote}) => {
  const [notetext, setnotetext] = useState("");
  const characterlimit=500;
  const handlechange = (event) => {
    
    if(characterlimit-event.target.value.length >0 ){
        setnotetext(event.target.value);
    }
  };
  const handlesave=()=>{
    if(notetext.trim().length > 0){
        handleaddnote(notetext)
        setnotetext("")
    }
        
  }
  return (
    <div className="note new">
      <textarea
        rows="6"
        cols="10"
        placeholder="Type a note"
        value={notetext}
        onChange={handlechange}
      ></textarea>
      <div className="note-footer">
        <small>{characterlimit-notetext.length} remaining</small>
        <button className="save" onClick={handlesave}>Add</button>
      </div>
    </div>
  );
};

export default Addnote;
