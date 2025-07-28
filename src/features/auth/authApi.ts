import axios from 'axios'

const API_URL = 'http://localhost:3000/auth'

export const loginUser = async (credentials: { email: string, password: string }) => {
  const response = await axios.post(`${API_URL}/login`, credentials)
  return response.data // { access_token, user }
}

