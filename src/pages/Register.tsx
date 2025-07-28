// src/pages/Register.tsx
import { useState } from 'react'
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post('/user/register', { username, email, password })
      navigate('/login')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erreur')
    }
  }

  return (


       <div className="main">
{/* <img  className="logo-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADV0lEQVR4nO2Zz08TQRTHa8QQY/wBSmKiUDCQaEyh3aFACAa9ET0YogS4GAl/AcGD/AdC4YQFL5zwZIwHkR8ioQak7NTK7wMUFDiiaKQY+SEzz8zUFBTWbne220b3Jd9kk86bt5+d93a28ywW00wzzbT/0sBTmgTDtpTf5C1KBV/+BS52/efvntIkY29yNC+TyFILweglwchPZGmayNJ7IqNPBEtrFCMQEZuDzyWzOaXpUAzUR2TUDF5Htj4QMrqpx81qhpTRJmCpXHwl4ghBd2G+wojDqhmEpVO8IWg4/ZBLBORV4oBI/SIgvgRakVERkJmEAZGlce0gGC0mEMiswIqgjxGDvLsGsNoDsLMOsLEINFAf+cYC9/hY7rPaDdR/VU1qLYmAfIsUAFZ7YWtzC7oed8HsxCwA3QY6dVvZZ6oCgP7gY5kP8+UwkUFWNEEAWA4RGZGIIDtBeN7ZBddzbkBVQTUwo8vNyj7LLXxMpbOK+zAYNkdkEGlNG0ggO1lN7rIUYU+XQbjqXSGQ+fvKPgsNfExjXRP3mZucA/j+QUWNoG1tIBO5x1QVYqCep1PYguNAfYXK432FAOsTu+NZKgbqVBU8PKk4HD2IXHBC9VuF1cSSK7QSf4PYA0PnG0I+k7fUxcAI2MONHmTYlqIa5AD1NZbwGtirvqYSzfNRBuJHZ6IHGbOniQRdG8yHmuKyMERtSRkEB51iIGP2tOhBsPOsSFCmdU8+9Dy4wsWuRecD7DwdPYg375xoYL0Fw7aUfwPEj07GJbV0B3lTfFy/Yh/IBdpvi70GcnV6/XqLUhMOxFt0NLYbolGpFchOjt0nirHFfkS/j8YhB9Ahu4Ac2kE8Gg70FD/juy8DfSEg5q8BgmApaInlHyvd9NoO0JkD4LYCtGbsV0fWtHYQjFYMg2hTAGjl2oGHVnvCHz7wlVCGoNBmrdIMoXgc9OwSwNOLmsX894EopVNrBoV2a7UQhJEHdIoQ7vM1whBGHpkeCPHIqg9ECAQ1xwGEQnv6XYuexposBEsbBoJQcKff0RUiDIOl8lj3SMKvWHdmZUwgwjAjDivrTxAZ9RIZvf3VGlvgrTIsfSYYfSEyolp3bOjImhHaJ2JhMJ53al/TM95NUNNMM800S6LZT5Q7zlouso/RAAAAAElFTkSuQmCC" alt="note"></img> */}
    
    <p className="sign" style={{ textAlign: "center" }}>Sign Up</p>
    <form className="form1" onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)}  className="un" type="text" placeholder="userName" style={{ textAlign: "center" }} />
      <input value={email} onChange={(e) => setEmail(e.target.value)}  className="un" type="text" placeholder="Email" style={{ textAlign: "center" }} />

      <input value={password} onChange={(e) => setPassword(e.target.value)} className="pass" type="password" placeholder="Password" style={{ textAlign: "center" }} />
    <button type="submit" className="submit" style={{ textAlign: "center" }}>
  Register
</button>
    
    </form>
        {error && <p>{error}</p>}
  </div>


  )
}

export default Register
