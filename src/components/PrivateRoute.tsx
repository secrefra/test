// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { ReactNode } from 'react'
import type { RootState } from '../app/store'

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const token = useSelector((state: RootState) => state.auth.token)
  const finalToken = token || localStorage.getItem('token')

  if (!finalToken) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
