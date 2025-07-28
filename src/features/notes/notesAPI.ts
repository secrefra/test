// src/features/notes/notesApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token') // Récupère le token stocké dans le localStorage
    if (token) {
      headers.set('Authorization', `Bearer ${token}`) 
    }
    return headers
  }
})

// Création de l'API RTK Query pour les notes
export const notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({

    // récupérer 
    getNotes: builder.query<any[], void>({
      query: () => '/note/dashboard/myNote', 
    }),
   // ajouter 
    addNote: builder.mutation<any, {  content: string }>({
      query: (note) => ({
        url: '/note',            
        method: 'POST',
        body: note,
      }),
    }),

    //  mettre à jour 
    updateNote: builder.mutation<any, { id: string; title: string; content: string }>({
      query: ({ id, ...body }) => ({
        url: `/note/${id}`,      
        method: 'PATCH',
        body,
      }),
    }),

    // ✅ Nouveau endpoint pour récupérer une note spécifique par son ID
    getNoteById: builder.query<any, string>({
      query: (id) => `/note/${id}`, 
    }),

  }),
})

// Exporter les hooks
export const {
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
} = notesApi
