import PropTypes from 'prop-types';

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <h4>Precio: ${product.price}</h4>
      <button>Agregar al carrito</button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Product;

