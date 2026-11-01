
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext.jsx";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="not-found">Product not found!</h2>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    navigate("/cart");
  };

  return (
    <div className="details-container">

      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-info">

        <p className="category">{product.category}</p>

        <h1>{product.name}</h1>

        <div className="rating">
          ⭐ {product.rating} / 5
        </div>

        <h2 className="details-price">
          ₹{product.price.toLocaleString("en-IN")}
        </h2>

        <p className="description">
          {product.description}
        </p>

        <p className="stock">
          Available Stock: {product.quantity}
        </p>

        <div className="quantity-selector">
          <span>Quantity:</span>

          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity((q) => Math.min(product.quantity, q + 1))
            }
            disabled={quantity >= product.quantity}
          >
            +
          </button>
        </div>

        <h3 className="subtotal">
          Subtotal: ₹{(product.price * quantity).toLocaleString("en-IN")}
        </h3>

        <button
          className="add-cart-btn details-cart-btn"
          onClick={handleAddToCart}
          disabled={product.quantity === 0}
        >
          Add to Cart
        </button>

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
}

export default ProductDetails;
