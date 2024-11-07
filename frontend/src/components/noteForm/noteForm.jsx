import { useState } from 'react';
import { useNotesContext } from '../hooks/useNotesContext'


const NoteForm = () => {
  
  const { dispatch } = useNotesContext()
  const [star, setStar] = useState('');
  const [physical, setPhysical] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Note = { star, physical, note };

    const response = await fetch('http://localhost:4000/notes/', {
      method: 'POST',
      body: JSON.stringify(Note),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setStar('');
      setPhysical('');
      setNote('');
      //console.log('new Note added:', json);
      dispatch({type: 'CREATE_NOTE', payload: json})

    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h3>Add a New Note</h3>

      <label>Star Name:</label>
      <input
        type="text"
        onChange={(e) => setStar(e.target.value)}
        value={star}
      />

      <label>Physical Characteristics:</label>
      <input
        type="text"
        onChange={(e) => setPhysical(e.target.value)}
        value={physical}
      />

      <label>Note:</label>
      <input
        type="text"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />

      <button>Add Note</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default NoteForm;
