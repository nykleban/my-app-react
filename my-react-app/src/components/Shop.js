import { useState } from "react";
import ShopCart from "./ShopCart";
import { FaShoppingCart } from "react-icons/fa";


export default function Shop() {
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [cart, setCart] = useState([]);
  function addToCart(id) {
    if (!cart.includes(id)) setCart([...cart, id]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item !== id));
  }

  function handleChange(event) {
    setItemsPerPage(Number(event.target.value));
  }
  return (
    <div className="shop-container">
      <header className="shop-header">
        <div className="cart-icon">
          <FaShoppingCart className="icon" />
          <span className="badge">{cart.length}</span>
        </div>

        <h2>Shop</h2>

        <div className="select-block">
          <label>Items per page:</label>
          <select value={itemsPerPage} onChange={handleChange}>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
      </header>

      <ShopCart limit={itemsPerPage} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
    </div>
  );
}
