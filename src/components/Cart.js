function Cart({ cart, onClose, onRemoveFromCart }) {
  return (
    <div className="cart">
      <div className="cart-content">
        <button onClick={onClose} className="close-button">X</button>
        <h1>Your Cart Items</h1>
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div>
            {cart.map(product => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} className="cart-image" />
                <div className="cart-info">
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
                  <button 
                    onClick={() => onRemoveFromCart(product.id)} 
                    className="btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;