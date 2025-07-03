import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="titulo">¡Bienvenido/a a nuestra tienda!</h1>
        <p>Por favor, iniciá sesión o registrate para continuar.</p>

        <Link to="/login">
          <button style={{ marginTop: '1.5rem' }}>Ir a Login</button>
        </Link>

        <Link to="/register">
          <button style={{ marginTop: '1rem', backgroundColor: '#28a745' }}>
            Ir a Registro
          </button>
        </Link>
      </div>
    </div>
  )
}