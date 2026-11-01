
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) * 100
      )
    : 0;

  return (
    <article className="flip-product-card">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="flip-product-image"
        />
      </Link>

      <div className="flip-product-info">

        <Link
          to={`/product/${product.id}`}
          className="flip-product-name"
        >
          {product.name}
        </Link>

        <div className="product-rating">
          {product.rating} ★
        </div>

        <div className="price-section">
          <strong>
            ₹{product.price.toLocaleString("en-IN")}
          </strong>

          {product.originalPrice > product.price && (
            <>
              <del>
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </del>

              <span>{discount}% off</span>
            </>
          )}
        </div>

        <p className="delivery-text">Free delivery</p>

        <button
          className="product-cart-button"
          onClick={() => addToCart(product)}
          disabled={product.quantity === 0}
        >
          <ShoppingCart size={17} />
          {product.quantity === 0 ? "Out of stock" : "Add to Cart"}
        </button>

      </div>
    </article>
  );
}

export default ProductCard;
