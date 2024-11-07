import { useNotesContext } from '../hooks/useNotesContext'

const NoteDetails = ({ note }) => {
  const { dispatch } = useNotesContext()

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/notes/' + note._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (
    <div className="note-details">
      <h4>{note.star}</h4>
      <p><strong>Physical properties: </strong>{note.physical}</p>
      <p><strong>NOTE:</strong> {note.note}</p>
      <p>{note.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
}

export default NoteDetails;
