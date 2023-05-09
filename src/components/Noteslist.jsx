import React from "react";
import Note from "./Note";
import "../index.css";
import Addnote from "./Addnote";
const Noteslist = ({ notes, handleaddnote, handledeletenote }) => {
  return (
    <div className="top">
      <div className="addnote">
      <Addnote handleaddnote={handleaddnote} />
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handledeletenote={handledeletenote}
          />
        ))}
      </div>
    </div>
  );
};

export default Noteslist;
