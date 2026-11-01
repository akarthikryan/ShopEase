
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Store,
  Menu
} from "lucide-react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header className="site-header">
      <div className="navbar-main">

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>

        <Link to="/" className="brand-logo">
          ShopEase
          <span>Explore Plus ✨</span>
        </Link>

        <form className="search-box" onSubmit={handleSearch}>
          <Search size={21} />

          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>

        <div className={`nav-actions ${menuOpen ? "show-menu" : ""}`}>

          <Link to="/login" className="nav-action">
            <User size={21} />
            <span>Login</span>
          </Link>

          <Link to="/cart" className="nav-action">
            <ShoppingCart size={22} />
            <span>Cart</span>
            <span className="cart-count">{cartCount}</span>
          </Link>

          <Link to="/register" className="nav-action seller-link">
            <Store size={21} />
            <span>Become a Seller</span>
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
