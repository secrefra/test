// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import notesReducer from '../features/notes/notesSlice'
import { notesApi } from '../features/notes/notesAPI'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesReducer,
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
