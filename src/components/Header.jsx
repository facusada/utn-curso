import { Link } from 'react-router-dom'
import '../App.css'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className="titulo">Ecommerce React</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Productos</Link>
      </nav>
    </header>
  )
}