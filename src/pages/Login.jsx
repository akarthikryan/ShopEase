
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const normalizedEmail = email.trim().toLowerCase();

    const validUser = users.find(
      (user) =>
        user.email.toLowerCase() === normalizedEmail &&
        user.password === password
    );

    if (validUser) {
      alert("Login successful!");

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          name: validUser.name,
          email: validUser.email
        })
      );

      navigate("/user");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <main className="login-page">

      <div className="login-card">

        {/* LEFT SIDE - BRANDING */}

        <section className="login-banner">

          <Link to="/" className="login-brand">
            <span className="login-brand-symbol">S</span>
            <span>ShopEase</span>
          </Link>

          <div className="login-banner-content">

            <span className="login-tagline">
              WELCOME BACK TO SHOPEASE
            </span>

            <h1>
              Shopping
              <br />
              Made
              <br />
              Simple.
            </h1>

            <p>
              Your favourite products are just a few
              clicks away. Sign in and continue
              exploring amazing deals.
            </p>

            <div className="login-benefits">

              <div>
                <span>✓</span>
                Discover exciting deals
              </div>

              <div>
                <span>✓</span>
                Manage your orders
              </div>

              <div>
                <span>✓</span>
                Enjoy easy shopping
              </div>

            </div>

          </div>

          <div className="login-decoration login-decoration-one"></div>
          <div className="login-decoration login-decoration-two"></div>

          <div className="login-banner-bottom">
            SHOP SMARTER. LIVE BETTER.
          </div>

        </section>

        {/* RIGHT SIDE - LOGIN FORM */}

        <section className="login-form-section">

          <div className="login-form-header">

            <span className="login-welcome">
              YOUR ACCOUNT IS WAITING
            </span>

            <h2>Welcome Back!</h2>

            <p>
              Please enter your details to sign in
              to your ShopEase account.
            </p>

          </div>

          <form
            className="modern-login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}

            <div className="login-input-group">

              <label htmlFor="login-email">
                Email Address
              </label>

              <input
                id="login-email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />

            </div>

            {/* PASSWORD */}

            <div className="login-input-group">

              <div className="login-password-heading">

                <label htmlFor="login-password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert("Please contact ShopEase support to reset your password.")
                  }
                >
                  Forgot Password?
                </button>

              </div>

              <div className="login-password-wrapper">

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit-button"
            >
              Sign In
              <span>→</span>
            </button>

          </form>

          {/* REGISTER LINK */}

          <div className="login-register-link">
            Don't have an account?
            <Link to="/register"> Create Account</Link>
          </div>

          {/* SECURITY MESSAGE */}

          <div className="login-security-note">
            <span>🔒</span>
            Welcome to a smarter shopping experience.
          </div>

          <Link to="/" className="login-home-link">
            ← Back to Home
          </Link>

        </section>

      </div>

    </main>
  );
}

export default Login;
