function Navbar({ cartcount, onCartClick }) {
  return (
    <nav>
      <div className="navbar">
        <h2>Fashion Shopping</h2>

        <div className="navdiv">
          <button>About </button>
          <button >Home </button>
          <button >Offers </button>
          <button onClick={onCartClick}>Cart {cartcount}</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;