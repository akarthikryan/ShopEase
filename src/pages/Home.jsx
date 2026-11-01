
import { useSearchParams } from "react-router-dom";
import CategoryBar from "../component/CategoryBar";
import HeroCarousel from "../component/HeroCarousel";
import ProductCard from "../component/ProductCard";
import products from "../data/products";

function Home() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      !category ||
      product.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="store-home">

      <CategoryBar />

      {!search && !category && <HeroCarousel />}

      <section className="deal-section" id="all-products">

        <div className="deal-heading">
          <div>
            <h2>
              {search
                ? `Search Results: ${search}`
                : category
                ? `${category} Products`
                : "Best Deals For You"}
            </h2>

            <p>Explore our latest products and offers</p>
          </div>

          <span>{filteredProducts.length} Products</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="flip-product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h2>No products found!</h2>
            <p>Try searching with another product name or category.</p>
          </div>
        )}

      </section>

      <section className="service-strip">
        <div>
          <span>🚚</span>
          <strong>Free Delivery</strong>
          <p>On selected products</p>
        </div>

        <div>
          <span>🔒</span>
          <strong>Secure Shopping</strong>
          <p>Safe shopping experience</p>
        </div>

        <div>
          <span>↩️</span>
          <strong>Easy Returns</strong>
          <p>Hassle-free returns</p>
        </div>
      </section>

    </main>
  );
}

export default Home;
