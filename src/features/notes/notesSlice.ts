// src/features/notes/notesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

export interface Note {
  _id: string
  title: string
  content: string
}

interface NotesState {
  notes: Note[]
  loading: boolean
  error: string | null
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
}

// 🔄 GET /notes
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/notes')
    return res.data
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Erreur fetch notes')
  }
})

// ➕ POST /notes
export const createNote = createAsyncThunk('notes/createNote', async (data: { title: string, content: string }, thunkAPI) => {
  try {
    const res = await axios.post('/notes', data)
    return res.data
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Erreur create note')
  }
})

// ❌ DELETE /notes/:id
export const deleteNote = createAsyncThunk('notes/deleteNote', async (id: string, thunkAPI) => {
  try {
    await axios.delete(`/notes/${id}`)
    return id
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Erreur delete note')
  }
})

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchNotes
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.notes = action.payload
        state.loading = false
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      // createNote
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
      })

      // deleteNote
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter(note => note._id !== action.payload)
      })
  }
})

export default notesSlice.reducer
