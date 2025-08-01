import { Link } from 'react-router-dom'
import '../App.css'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="nav">
        <Link to="/products">Productos</Link>
      </nav>
    </header>
  )
}