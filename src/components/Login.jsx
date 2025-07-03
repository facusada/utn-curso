import { Link } from 'react-router-dom'
import InputField from './InputField'
import Title from './Title'

export default function LoginForm() {
  return (
    <div className="app">
      <div className="container">
        <Title text="Iniciar Sesión" />
        <InputField placeholder="Correo electrónico" />
        <InputField placeholder="Contraseña" type="password" />
        <button>Ingresar</button>

        <Link to="/">
          <button style={{ marginTop: '1rem', backgroundColor: '#6c757d' }}>
            ⬅ Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  )
}