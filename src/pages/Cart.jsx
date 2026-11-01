
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShieldCheck,
  Truck
} from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal
  } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  return (
    <main className="modern-cart-page">

      <div className="cart-page-header">
        <div>
          <h1>My Shopping Cart</h1>
          <p>
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <Link to="/" className="back-shopping-link">
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>
      </div>

      {cart.length === 0 ? (

        <div className="modern-empty-cart">
          <div className="empty-cart-icon">
            <ShoppingBag size={55} />
          </div>

          <h2>Your cart is feeling lonely!</h2>

          <p>
            You haven't added any products yet.
            Discover something you'll love.
          </p>

          <Link to="/" className="empty-cart-button">
            Start Shopping
          </Link>
        </div>

      ) : (

        <div className="modern-cart-layout">

          {/* LEFT SIDE - CART PRODUCTS */}

          <section className="cart-products-section">

            <div className="cart-section-heading">
              <h2>Shopping Items</h2>
              <span>{totalItems} Items</span>
            </div>

            {cart.map((item) => (

              <article className="modern-cart-item" key={item.id}>

                <Link
                  to={`/product/${item.id}`}
                  className="cart-image-wrapper"
                >
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="modern-cart-product-info">

                  <Link
                    to={`/product/${item.id}`}
                    className="modern-cart-product-name"
                  >
                    {item.name}
                  </Link>

                  <p className="cart-product-category">
                    {item.category}
                  </p>

                  <h3>
                    ₹{item.price.toLocaleString("en-IN")}
                  </h3>

                  <div className="cart-stock-status">
                    <span></span>
                    In Stock
                  </div>

                  <div className="cart-item-actions">

                    <div className="modern-quantity-control">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.cartQuantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={15} />
                      </button>

                      <span>{item.cartQuantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        disabled={item.cartQuantity >= item.quantity}
                        aria-label="Increase quantity"
                      >
                        <Plus size={15} />
                      </button>

                    </div>

                    <button
                      className="modern-remove-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={15} />
                      Remove
                    </button>

                  </div>

                </div>

                <div className="modern-cart-item-total">
                  <span>Item Total</span>

                  <h3>
                    ₹{(
                      item.price * item.cartQuantity
                    ).toLocaleString("en-IN")}
                  </h3>
                </div>

              </article>

            ))}

            <div className="cart-delivery-info">
              <Truck size={22} />

              <div>
                <strong>Free Delivery</strong>
                <p>Your selected products qualify for free delivery.</p>
              </div>
            </div>

          </section>

          {/* RIGHT SIDE - ORDER SUMMARY */}

          <aside className="modern-cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-detail-row">
              <span>Price ({totalItems} items)</span>
              <span>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="summary-detail-row">
              <span>Delivery Charges</span>
              <span className="free-delivery">FREE</span>
            </div>

            <div className="summary-detail-row">
              <span>Discount</span>
              <span className="discount-text">₹0</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total-row">
              <strong>Total Amount</strong>
              <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
            </div>

            <p className="cart-savings-message">
              You're getting free delivery on this order!
            </p>

            <button
              className="modern-checkout-button"
              onClick={() => alert("Checkout feature coming soon!")}
            >
              Proceed to Checkout
            </button>

            <div className="secure-payment-info">
              <ShieldCheck size={19} />

              <span>
                Safe and secure shopping experience
              </span>
            </div>

          </aside>

        </div>

      )}

    </main>
  );
}

export default Cart;
