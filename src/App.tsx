// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Exmp  from './pages/expm'

import PrivateRoute from './components/PrivateRoute'

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />


        <Route
        path="/expm"
        element={
          <PrivateRoute>
            <Exmp  />
          </PrivateRoute>
        }
      />

    </Routes>
  </BrowserRouter>
)

export default App
