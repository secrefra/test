import { useState } from 'react'
import {
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation
} from '../features/notes/notesAPI'

interface Note {
  _id: string
  content: string
}

const Dashboard = () => {
  const { data: notes = [], isLoading, isError, refetch } = useGetNotesQuery()
  const [addNote] = useAddNoteMutation()
  const [updateNote] = useUpdateNoteMutation()

  const [selectedNote, setSelectedNote] = useState<Note | null>(null)

 const handleAddNote = async () => {
  try {
    const newNote = await addNote({ content: 'Nouvelle note' }).unwrap()
    setSelectedNote(newNote)
    refetch()
  } catch (error) {
    console.error("Erreur lors de l'ajout de la note :", error)
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!selectedNote) return
    setSelectedNote({ ...selectedNote, content: e.target.value })
  }

  if (isLoading) return <div>Chargement des notes...</div>
  if (isError) return <div>Erreur lors du chargement des notes.</div>

  return (
    <div style={{ display: 'flex', height: '97vh', fontFamily: 'sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '330px', borderRight: '1px solid #ddd', padding: '20px', background: '#f9f9f9' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <h3 style={{ margin: 0 }}>Notes</h3>
          <button
            onClick={handleAddNote}
            style={{
              cursor: 'pointer',
              border: 'none',
              background: '#007bff',
              color: '#fff',
              padding: '6px 10px',
              borderRadius: '4px'
            }}
          >
            +
          </button>
        </div>

        <div style={{ overflowY: 'auto', height: 'calc(100vh - 120px)' }}>
          {notes.map((note: Note) => {
            const title = note.content?.split('\n')[0]
            return (
              <div
                key={note._id}
                onClick={() => setSelectedNote(note)}
                style={{
                  padding: '10px',
                  marginBottom: '5px',
                  backgroundColor: selectedNote?._id === note._id ? '#eaeaea' : '#fff',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  border: '1px solid #eee'
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '0.95em' }}>
                  {title || '(Sans titre)'}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Note editor */}
      <div style={{ flex: 1, padding: '10px' }}>
        {selectedNote ? (
          <textarea
            value={selectedNote.content}
            onChange={handleChange}
            placeholder="Commence à écrire ta note..."
            style={{
              width: '96%',
              height: '90%',
              padding: '15px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              resize: 'none'
            }}
          />
        ) : (
          <p style={{ color: '#666' }}>Clique sur une note ou crée-en une nouvelle.</p>
        )}

   <button
onClick={async () => {
  if (!selectedNote) return
  try {
    await updateNote({ id: selectedNote._id, content: selectedNote.content }).unwrap()
    console.log('✅ Note enregistrée avec succès.')
    refetch() // <-- Ajoute ça ici
  } catch (err) {
    console.error("❌ Erreur lors de l'enregistrement :", err)
  }
}}

>
  Enregistrer 
</button>

      </div>

    </div>
  )
}

export default Dashboard
