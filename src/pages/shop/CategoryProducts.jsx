import { Link, useParams } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

import products from "../../data/products";
import GlassCard from "../../components/common/GlassCard";

const categoryNames = {
  classic: "کلاسیک",
  luxury: "لوکس",
  minimal: "مینیمال",
  sport: "اسپرت",
};

function CategoryProducts() {
  const { category } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const title =
    categoryNames[category] || "محصولات";

  return (
    <section className="category-products-page">

      <div className="category-products-header">
        <span>
          AM COLLECTION
        </span>

        <h1>
          ساعت‌های {title}
        </h1>

        <p>
          {categoryProducts.length.toLocaleString("fa-IR")} محصول در این مجموعه
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="products-grid">

          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              to={`/shop/product/${product.id}`}
              className="product-link"
            >
              <GlassCard className="product-card">

                <div className="product-card-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  {product.badge && (
                    <span className="product-card-badge">
                      {product.badge}
                    </span>
                  )}

                  <div className="product-card-arrow">
                    <ArrowUpLeft size={19} />
                  </div>

                </div>

                <div className="product-card-content">

                  <div className="product-card-meta">
                    <span>
                      {product.brand}
                    </span>

                    <span>
                      ★ {product.rating}
                    </span>
                  </div>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                  <div className="product-card-bottom">

                    <strong>
                      {product.price.toLocaleString("fa-IR")}
                      <small> تومان</small>
                    </strong>

                  </div>

                </div>

              </GlassCard>
            </Link>
          ))}

        </div>
      ) : (
        <div className="products-empty">
          محصولی در این دسته وجود ندارد.
        </div>
      )}

    </section>
  );
}

export default CategoryProducts;