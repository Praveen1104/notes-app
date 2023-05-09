import "./App.css";
import { nanoid } from "nanoid";
import Noteslist from "./components/Noteslist";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
function App() {
  const [notes, setnotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "13/04/2023",
    },
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "13/04/2023",
    },
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "13/04/2023",
    },
  ]);
  const [searchtext, setsearchtext] = useState("");
  const [darkmode,setdarkmode]=useState(false);

  useEffect(()=>{
    const saved=JSON.parse(localStorage.getItem('react-notes'))

    if(saved){
      setnotes(saved)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('react-notes',JSON.stringify(notes))
  },[notes])
  const Addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setnotes(newNotes);
  };

  const Deletenote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setnotes(newNotes);
  };

  return (
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className="container">
      <Header handledarkmode={setdarkmode}/>
      <Search handlesearchnote={setsearchtext} />
      <Noteslist
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchtext)
        )}
        handleaddnote={Addnote}
        handledeletenote={Deletenote}
      />
    </div>
    </div>
  );
}

export default App;
