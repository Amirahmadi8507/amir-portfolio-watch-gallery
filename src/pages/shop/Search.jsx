import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search as SearchIcon, ArrowUpLeft } from "lucide-react";

import products from "../../data/products";
import GlassCard from "../../components/common/GlassCard";

function Search() {
  const [searchParams] = useSearchParams();

  const initialQuery =
    searchParams.get("q") || "";

  const [query, setQuery] =
    useState(initialQuery);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const normalized = query.toLowerCase();

    return products.filter((product) =>
      `${product.name} ${product.brand} ${product.description}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  return (
    <section className="search-page">

      <div className="search-header">
        <span>
          SEARCH
        </span>

        <h1>
          جستجوی ساعت
        </h1>

        <div className="search-large-box">
          <SearchIcon size={20} />

          <input
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="نام ساعت، برند یا ویژگی..."
            autoFocus
          />
        </div>
      </div>

      {query && (
        <div className="search-result-count">
          {results.length.toLocaleString("fa-IR")} نتیجه برای «{query}»
        </div>
      )}

      {results.length > 0 && (
        <div className="products-grid">

          {results.map((product) => (
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

                  <div className="product-card-arrow">
                    <ArrowUpLeft size={19} />
                  </div>
                </div>

                <div className="product-card-content">

                  <div className="product-card-meta">
                    <span>{product.brand}</span>
                    <span>★ {product.rating}</span>
                  </div>

                  <h3>{product.name}</h3>

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
      )}

      {query && results.length === 0 && (
        <div className="products-empty">
          <SearchIcon size={35} />

          <h3>
            نتیجه‌ای پیدا نشد
          </h3>

          <p>
            عبارت دیگری را امتحان کنید.
          </p>
        </div>
      )}

    </section>
  );
}

export default Search;