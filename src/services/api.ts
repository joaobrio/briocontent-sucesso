import axios from 'axios'

// Configure com seu webhook do n8n
const API_BASE = 'https://seu-n8n.com/webhook'

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para adicionar token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password })
    return response.data
  },
  
  logout: () => {
    localStorage.removeItem('token')
  },
}

export const contentService = {
  generate: async (prompt: string, type: string) => {
    const response = await api.post('/content/generate', { prompt, type })
    return response.data
  },
  
  list: async () => {
    const response = await api.get('/content/list')
    return response.data
  },
}

export default api