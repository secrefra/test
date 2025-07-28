import NoteInput from '../components/NoteInput'


const Exmp = () => {

    return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div className="col-span-1">
        <NoteInput />
      </div>
      <div className="col-span-2">
        {/* Liste des notes ici */}
      </div>
    </div>
  )
  
}

export default Exmp 


// import { useState } from 'react'
// import { useGetNotesQuery, useAddNoteMutation } from '../features/notes/notesAPI'

// const Dashboard = () => {
//   const { data: notes, isLoading, isError, refetch } = useGetNotesQuery()
//   const [addNote] = useAddNoteMutation()

//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')

//   const handleAddNote = async () => {
//     if (!title.trim()) return alert('Le titre est requis.')

//     try {
//       await addNote({ title, content: content || '' }).unwrap()
//       setTitle('')
//       setContent('')
//       refetch() // Recharge les notes après ajout
//     } catch (error) {
//       console.error("Erreur lors de l'ajout :", error)
//     }
//   }

//   return (
//     <div style={{
//       height: "90vh",
//       display: "grid",
//       gridTemplateRows: "auto auto 1fr",
//       backgroundColor: "#f0f2f5"
//     }}>
      
//       {/* Ligne 1 - En-tête */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1px 3fr",
//         alignItems: "center",
//         textAlign: "center",
//         padding: "20px",
//         backgroundColor: "#ddd",
//         fontWeight: "bold"
//       }}>
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
//           <span>All Notes</span>
//           <i className="fa-solid fa-pen-to-square" style={{ cursor: "pointer", color: "#6141c9" }}></i>
//         </div>
//         <div style={{ backgroundColor: "#aaa", width: "1px", height: "100%" }}></div>
//         <div>Contenu</div>
//       </div>

//       {/* Ligne 2 - Formulaire */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 3fr",
//         gap: "10px",
//         padding: "20px",
//         backgroundColor: "#fff"
//       }}>
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <input
//             type="text"
//             placeholder="Titre"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
//           />
//           <button
//             onClick={handleAddNote}
//             style={{
//               padding: "10px",
//               backgroundColor: "#6141c9",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer"
//             }}
//           >
//             Ajouter
//           </button>
//         </div>
//         <div>
//           <textarea
//             placeholder="Écris ta note ici..."
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             style={{
//               width: "100%",
//               height: "100%",
//               padding: "10px",
//               borderRadius: "8px",
//               border: "1px solid #ccc",
//               resize: "none",
//               boxSizing: "border-box"
//             }}
//           />
//         </div>
//       </div>

//       {/* Ligne 3 - Liste des notes */}
//       <div style={{ padding: "20px", overflowY: "auto" }}>
//         {isLoading ? (
//           <p>Chargement...</p>
//         ) : isError ? (
//           <p>Erreur de chargement</p>
//         ) : (
//           <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//             {notes?.map((note: any) => (
//               <div key={note._id} style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "15px",
//                 backgroundColor: "#fff",
//                 width: "250px",
//                 boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
//               }}>
//                 <h4>{note.title}</h4>
//                 <p>{note.content || <i style={{ color: "#999" }}>Contenu vide...</i>}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Dashboard
