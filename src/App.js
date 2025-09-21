import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css"

function App() {
  const [products, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const productResponse = await fetch("https://fakestoreapi.com/products");
        const productData = await productResponse.json();
        setProduct(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);


  if (loading) {
    return (
      <h1>Releax while we fetch your data!!</h1>
    )
  }

  if (error) {
    return (
      <h1>Oops Something Went Wrong : {error}</h1>
    )
  }


// ADD
  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert("Item Already added to the cart");
      return;
    }
    else {
      setCart([...cart, product])
    }

  }

// REMOVE
  const removeCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }



  return (

    <div className="App">
      <Navbar cartcount={cart.length} onCartClick = { () => setShowCart(true)} />
     
      <h1 className="prodtitle">LETS'S EXPLORE UNIQUE PRODUCTS </h1>

      <div className="product">
        {products.map((product) => (
          <ProductCard product={product} 
          key={product.id} 
          onAddCart={addToCart} 
          />
        ))}
      </div>

      {/*Redner the Cart*/}
      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemoveFromCart={removeCart}
        />
      )}

    </div>




  )



}
export default App;