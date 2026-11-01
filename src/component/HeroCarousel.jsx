
import { useEffect, useState } from "react";

const banners = [
  {
    title: "Upgrade Your Technology",
    subtitle: "Discover the latest gadgets at amazing prices.",
    offer: "UP TO 60% OFF",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600"
  },
  {
    title: "Fashion For Everyone",
    subtitle: "Find your perfect style with our latest collection.",
    offer: "UP TO 50% OFF",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
  },
  {
    title: "Everything For Your Home",
    subtitle: "Make your home beautiful with amazing products.",
    offer: "SPECIAL DEALS",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600"
  }
];

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[active];

  return (
    <section
      className="flip-hero"
      style={{ backgroundImage: `url(${banner.image})` }}
    >
      <div className="flip-hero-overlay">
        <span className="offer-label">{banner.offer}</span>

        <h1>{banner.title}</h1>

        <p>{banner.subtitle}</p>

        <a href="#all-products" className="hero-shop-button">
          Shop Now →
        </a>
      </div>

      <button
        className="hero-arrow hero-prev"
        onClick={() =>
          setActive((prev) =>
            (prev - 1 + banners.length) % banners.length
          )
        }
        aria-label="Previous banner"
      >
        ❮
      </button>

      <button
        className="hero-arrow hero-next"
        onClick={() =>
          setActive((prev) => (prev + 1) % banners.length)
        }
        aria-label="Next banner"
      >
        ❯
      </button>

      <div className="hero-indicators">
        {banners.map((item, index) => (
          <button
            key={index}
            className={active === index ? "selected" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
