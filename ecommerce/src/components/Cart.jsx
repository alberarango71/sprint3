import { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Función para enviar la información del carrito en formato JSON
  const handleCheckout = () => {
    const cartData = {
      items: cartItems,
      total: cartItems.reduce((total, item) => total + item.price, 0),
    };

    fetch('URL_DEL_ENDPOINT_DE_COMPRA', {
      method: 'POST',
      body: JSON.stringify(cartData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('Compra exitosa');
          setCartItems([]);
        } else {
          alert('Error en la compra');
        }
      });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title} - ${item.price}</p>
          </div>
        ))}
      </div>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
}

export default Cart;
