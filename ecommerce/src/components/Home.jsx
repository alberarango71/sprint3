import { useState, useEffect } from 'react';
import Product from './Product.jsx';// Asegúrate de que la ruta al componente del producto sea correcta

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Cambia esto al número de productos que quieres por página

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Obtén los productos actuales
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambia la página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <div className="product-list">        
        {currentProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;