
const NoteDetails = ({ note }) => {
  return (
    <div className="note-details">
      <h4>{note.star}</h4>
      <p><strong>Physical properties: </strong>{note.physical}</p>
      <p><strong>NOTE:</strong> {note.note}</p>
      <p>{note.createdAt}</p>
    </div>
  );
}

export default NoteDetails;
