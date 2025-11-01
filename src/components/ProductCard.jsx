import React from "react";
import "./ProductCard.css";

const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} className="image" />
    <h4 className="title">{truncateText(product.title, 30)}</h4> {/* Truncate to 30 chars */}
    <p className="price">${product.price.toFixed(2)}</p>
    <button className="btn" onClick={() => onAddToCart(product)}>
      Add to Cart
    </button>
  </div>
); 

export default ProductCard;
