import { useEffect, useState } from "react";
import '../styles/notes.css';
import { useNotesContext } from "../components/hooks/useNotesContext"

// components

import NoteDetails from "../components/noteDetails/noteDetails"
import NoteForm from "../components/noteForm/noteForm"
const Note = () => {

  //const [notes, setnotes] = useState(null)
  const { notes, dispatch } = useNotesContext()

  useEffect(() => {
    const fetchnotes = async () => {
        console.log("fetching dets")
      const response = await fetch('http://localhost:4000/notes/')
      const json = await response.json()
        
      if (response.ok) {
        console.log("setting notes")
        //setnotes(json)
        dispatch({type: 'SET_NOTES', payload: json})
      }
      else {
        console.log("Fetch failed:", response.statusText);
    }
    }

    fetchnotes()
  }, [dispatch])

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