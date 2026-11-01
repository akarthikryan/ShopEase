
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const normalizedEmail = formData.email.trim().toLowerCase();

    const alreadyExists = users.some(
      (user) => user.email.toLowerCase() === normalizedEmail
    );

    if (alreadyExists) {
      alert("Email already registered!");
      return;
    }

    const newUser = {
      name: formData.name.trim(),
      email: normalizedEmail,
      password: formData.password
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <main className="register-page">

      <div className="register-card">

        {/* LEFT SIDE - BRANDING */}

        <section className="register-banner">

          <div className="register-brand">
            <span className="brand-symbol">S</span>
            <span>ShopEase</span>
          </div>

          <div className="register-banner-content">
            <span className="register-tagline">
              YOUR SHOPPING JOURNEY STARTS HERE
            </span>

            <h1>
              Discover.
              <br />
              Shop.
              <br />
              Enjoy.
            </h1>

            <p>
              Create your account and explore thousands
              of amazing products at unbeatable prices.
            </p>

            <div className="register-benefits">
              <div>
                <span>✓</span>
                Exclusive member offers
              </div>

              <div>
                <span>✓</span>
                Easy and secure shopping
              </div>

              <div>
                <span>✓</span>
                Track all your orders
              </div>
            </div>
          </div>

          <div className="register-decoration decoration-one"></div>
          <div className="register-decoration decoration-two"></div>

          <div className="register-banner-bottom">
            SHOP SMARTER. LIVE BETTER.
          </div>

        </section>

        {/* RIGHT SIDE - REGISTER FORM */}

        <section className="register-form-section">

          <div className="register-form-header">

            <span className="register-welcome">
              GET STARTED FOR FREE
            </span>

            <h2>Create Account</h2>

            <p>
              Join ShopEase and start your shopping experience.
            </p>

          </div>

          <form
            className="modern-register-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="register-input-group">

              <label htmlFor="register-name">
                Full Name
              </label>

              <input
                id="register-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                autoComplete="name"
              />

            </div>

            {/* EMAIL */}

            <div className="register-input-group">

              <label htmlFor="register-email">
                Email Address
              </label>

              <input
                id="register-email"
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />

            </div>

            {/* PASSWORD */}

            <div className="register-input-group">

              <label htmlFor="register-password">
                Password
              </label>

              <div className="register-password-wrapper">

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              <small>Use at least 6 characters.</small>

            </div>

            {/* TERMS */}

            <label className="register-terms">
              <input type="checkbox" required />
              <span>
                I agree to the{" "}
                <Link to="/about">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/about">Privacy Policy</Link>.
              </span>
            </label>

            {/* SUBMIT */}

            <button
              type="submit"
              className="register-submit-button"
            >
              Create My Account
              <span>→</span>
            </button>

          </form>

          <div className="register-login-link">
            Already have an account?
            <Link to="/login"> Sign In</Link>
          </div>

          <div className="register-security-note">
            <span>🔒</span>
            Your shopping experience starts with ShopEase.
          </div>

        </section>

      </div>

    </main>
  );
}

export default Register;
