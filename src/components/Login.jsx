import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Title from './Title'
import InputField from './InputField'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    // Lógica de validación simple
    if (email && password) {
      // Simulación de login exitoso
      navigate('/products')
    } else {
      alert('Por favor, completá ambos campos.')
    }
  }

  return (
    <div className="app">
      <div className="container">
        <Title text="Iniciar Sesión" />

        <InputField
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Ingresar</button>

        <Link to="/">
          <button style={{ marginTop: '1rem', backgroundColor: '#6c757d' }}>
            ⬅ Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  )
}