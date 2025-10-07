import { useEffect, useState } from "react";


export default function ShopCart({ limit, cart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(() => setProducts([]));
  }, [limit]);

  if (!products.length) {
    return <p className="loading">Loading products...</p>;
  }

  return (
    <div className="shop-grid">
      {products.map((p) => {
        const inCart = cart.includes(p.id); // перевіряємо, чи є товар у кошику
        return (
          <div key={p.id} className="product-card">
            <div className="image">
              <img src={p.images[0]} alt={p.title} />
            </div>
            <h3 className="title">{p.title}</h3>
            <p className="price">${p.price}</p>

            {!inCart ? (
              <button className="btn add" onClick={() => addToCart(p.id)}>
                Add to cart
              </button> // якщо товару немає в кошику, показуємо кнопку "Add to cart"
            ) : (
              <button className="btn remove" onClick={() => removeFromCart(p.id)}>
                Remove
              </button> // якщо товар є в кошику, показуємо кнопку "Remove"
            )}
          </div>
        );
      })}
    </div>
  );
}
