import { useEffect, useState } from "react";
import '../styles/notes.css';
// components

import NoteDetails from "../components/noteDetails/noteDetails"
import NoteForm from "../components/noteForm/noteForm"
const Note = () => {

  const [notes, setnotes] = useState(null)

  useEffect(() => {
    const fetchnotes = async () => {
        console.log("fetching dets")
      const response = await fetch('http://localhost:4000/notes/')
      const json = await response.json()
        
      if (response.ok) {
        console.log("setting notes")
        setnotes(json)
      }
    }

    fetchnotes()
  }, [])

  return (
    
    <div className="note">
      <div className="maping">
        {notes && notes.map(note => (
          <NoteDetails note={note} key={note._id} />
        ))}
      </div>
      <NoteForm />
    </div>
  )
}

export default Note 