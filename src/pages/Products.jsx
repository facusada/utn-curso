import Header from '../components/Header'
import Footer from '../components/Footer'
import './Products.module.css'

export default function Products() {
  return (
    <>
      <Header />
      <div className="container-products">
        <h2 className="titulo">Productos disponibles</h2>
        {/* Podés mostrar una lista de productos acá */}
        <p>Acá irán los productos...</p>
      </div>
      <Footer />
    </>
  )
}