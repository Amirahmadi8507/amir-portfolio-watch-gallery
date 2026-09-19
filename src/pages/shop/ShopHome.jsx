import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpLeft,
  Sparkles,
  ShoppingBag,
  Search,
} from "lucide-react";

import { Link } from "react-router-dom";
import products from "../../data/products";
import GlassCard from "../../components/common/GlassCard";
import Button from "../../components/common/Button";

function ShopHome() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="shop-home">

      {/* Hero */}
      <div className="shop-hero">

        <motion.div
          className="shop-hero-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="shop-eyebrow">
            <Sparkles size={15} />
            AM WATCH GALLERY
          </span>

          <h1>
            زمان را
            <span> متفاوت ببین.</span>
          </h1>

          <p>
            مجموعه‌ای از ساعت‌های خاص با طراحی لوکس،
            جزئیات دقیق و استایلی که برای ماندگار شدن
            ساخته شده است.
          </p>

          <div className="shop-hero-actions">
            <Link to="/shop/products">
              <Button variant="primary">
                مشاهده محصولات
                <ArrowLeft size={17} />
              </Button>
            </Link>

            <Link
              to="/shop/categories"
              className="shop-secondary-link"
            >
              دسته‌بندی‌ها
              <ArrowUpLeft size={17} />
            </Link>

            <Link
  to="/shop/search"
  className="shop-secondary-link"
>
  جستجو
  <Search size={16} />
</Link>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          className="shop-hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="shop-hero-glow"></div>

          <div className="shop-hero-circle">
            <span>AM</span>
          </div>

          <div className="shop-floating-label">
            <ShoppingBag size={16} />
            PREMIUM COLLECTION
          </div>
        </motion.div>

      </div>

      {/* Featured */}
      <section className="featured-products">

        <div className="shop-section-heading">
          <div>
            <span>FEATURED COLLECTION</span>
            <h2>محصولات منتخب</h2>
          </div>

          <Link to="/shop/products">
            مشاهده همه
            <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="featured-products-grid">

          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={`/shop/product/${product.id}`}
                className="product-card-link"
              >
                <GlassCard className="featured-product-card">

                  <div className="featured-product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    {product.badge && (
                      <span className="product-badge">
                        {product.badge}
                      </span>
                    )}

                    <div className="product-image-arrow">
                      <ArrowUpLeft size={19} />
                    </div>
                  </div>

                  <div className="featured-product-content">

                    <div className="featured-product-meta">
                      <span>{product.brand}</span>
                      <span>
                        ★ {product.rating}
                      </span>
                    </div>

                    <h3>{product.name}</h3>

                    <p>
                      {product.description}
                    </p>

                    <div className="featured-product-price">
                      <strong>
                        {product.price.toLocaleString("fa-IR")} تومان
                      </strong>

                      {product.oldPrice && (
                        <del>
                          {product.oldPrice.toLocaleString("fa-IR")}
                        </del>
                      )}
                    </div>

                  </div>

                </GlassCard>
              </Link>
            </motion.div>
          ))}

        </div>
      </section>

    </section>
  );
}

export default ShopHome;