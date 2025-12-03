import React, { useState } from "react";
import { productCategories } from "../components/ProductsData.js";
import "../components/ProductStyle.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0]);
  const [selectedProduct, setSelectedProduct] = useState(selectedCategory.products[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleCategoryChange = (categoryId) => {
    const category = productCategories.find((c) => c.id === categoryId);
    setSelectedCategory(category);
    setSelectedProduct(category.products[0]);
    setSelectedImageIndex(0);
  };

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Our Lip Care Products</h1>

      <div className="category-buttons">
        {productCategories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${selectedCategory.id === cat.id ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="selected-product">
        <img
          src={selectedProduct.images[selectedImageIndex]}
          alt={selectedProduct.name}
          className="main-product-img"
        />
        <h2>{selectedProduct.name}</h2>

        <div className="color-options">
          {selectedCategory.products.map((product) => (
            <button
              key={product.id}
              className="color-btn"
              style={{ backgroundColor: product.color }}
              onClick={() => handleProductChange(product)}
              title={product.name}
            ></button>
          ))}
        </div>
        
        <div className="thumbnail-container">
          {selectedProduct.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${selectedProduct.name} ${index + 1}`}
              className={`thumbnail ${selectedImageIndex === index ? "active" : ""}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Products;
