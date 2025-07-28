import React, { useState, useEffect } from 'react'
import { useAddNoteMutation } from '../features/notes/notesAPI'

let timeout: ReturnType<typeof setTimeout>

const NoteInput = () => {
  const [text, setText] = useState('')
  const [addNote] = useAddNoteMutation()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  useEffect(() => {
    const content = text.trim()
    if (!content) return

    clearTimeout(timeout)

    // Enregistre automatiquement après 1 seconde de pause
    timeout = setTimeout(async () => {
      const title = text.split('\n')[0]
      const body = text.split('\n').slice(1).join('\n')
      const fullContent = `${title}\n${body}`.trim()

      try {
        await addNote({ content: fullContent }).unwrap()
        console.log("Note enregistrée automatiquement.")
      } catch (error) {
        console.error("Erreur lors de l'ajout :", error)
      }
    }, 1000)
    
    return () => clearTimeout(timeout)
  }, [text])

  const title = text.split('\n')[0]
  const body = text.split('\n').slice(1).join('\n')

  return (
    <div className="p-4 border rounded-xl shadow bg-white w-full">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Commence à écrire ta note ici..."
        className="w-full resize-none p-3 border rounded focus:outline-none focus:ring"
      />

      {/* Aperçu en live */}
      {text && (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <strong className="block text-lg font-bold">{title}</strong>
          <p className="text-gray-700 whitespace-pre-wrap">{body}</p>
        </div>
      )}
    </div>
  )
}

export default NoteInput
