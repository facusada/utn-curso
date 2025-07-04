import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Products.module.css'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <>
      <Header />
      <div className={styles.containerProducts}>
        <h2 className={styles.titulo}>Productos disponibles</h2>

        {/* Lista de productos */}
        <div className={styles.productList}>
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.productCard}>
                <img src={product.image} alt={product.title} className={styles.productImage} />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}