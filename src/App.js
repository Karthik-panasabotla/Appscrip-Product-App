import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFiltered(response.data);
        const uniqueCategories = ["All", ...new Set(response.data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("API error:", error));
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setFiltered(category === "All" ? products : products.filter((p) => p.category === category));
  };

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app-container">
      <Header cartCount={cartItems.length} onCartClick={toggleCart} />
      <main className="main-content">
        <Filters categories={categories} selected={selectedCategory} onFilter={handleFilter} />
        <ProductGrid products={filtered} onAddToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
