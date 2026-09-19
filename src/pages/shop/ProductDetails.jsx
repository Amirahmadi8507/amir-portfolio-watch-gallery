import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import products from "../../data/products";
import GlassCard from "../../components/common/GlassCard";
import { useCart } from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

function ProductDetails() {

    const [addedToCart, setAddedToCart] = useState(false);
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );
    const { addToCart } = useCart();

const {
  toggleWishlist,
  isInWishlist,
} = useWishlist();
  if (!product) {
    return (
      <section className="product-not-found">
        <h1>
          محصول پیدا نشد
        </h1>

        <Link to="/shop/products">
          بازگشت به محصولات
        </Link>
      </section>
    );
  }

  return (
    <section className="product-details-page">

      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <Link to="/shop">
          فروشگاه
        </Link>

        <span>/</span>

        <Link to="/shop/products">
          محصولات
        </Link>

        <span>/</span>

        <strong>
          {product.name}
        </strong>
      </div>

      <div className="product-details-grid">

        {/* Image */}
        <motion.div
          className="product-details-image"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <GlassCard>

            <div className="product-details-image-inner">

              <img
                src={product.image}
                alt={product.name}
              />

              {product.badge && (
                <span className="product-details-badge">
                  {product.badge}
                </span>
              )}

            </div>

          </GlassCard>
        </motion.div>

        {/* Info */}
        <motion.div
          className="product-details-content"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >

          <span className="product-details-brand">
            {product.brand}
          </span>

          <h1>
            {product.name}
          </h1>

          <div className="product-details-rating">
            <span>
              ★ {product.rating}
            </span>

            <span>
              {product.reviews} نظر
            </span>
          </div>

          <p className="product-details-description">
            {product.description}
          </p>

          <div className="product-details-price">

            <strong>
              {product.price.toLocaleString("fa-IR")}
              <small> تومان</small>
            </strong>

            {product.oldPrice && (
              <del>
                {product.oldPrice.toLocaleString("fa-IR")}
              </del>
            )}

          </div>

          {/* Features */}

          <div className="product-features">

            {product.features.map((feature) => (
              <div
                key={feature}
                className="product-feature"
              >
                <ShieldCheck size={17} />

                <span>
                  {feature}
                </span>
              </div>
            ))}

          </div>
            <div className="product-specifications">

  <div>
    <span>
      برند
    </span>

    <strong>
      {product.brand}
    </strong>
  </div>

  <div>
    <span>
      نوع
    </span>

    <strong>
      {product.type}
    </strong>
  </div>

  <div>
    <span>
      دسته‌بندی
    </span>

    <strong>
      {product.category}
    </strong>
  </div>

</div>
          {/* Actions */}

          <div className="product-details-actions">

   <button
  type="button"
  className={`product-add-cart ${
    addedToCart ? "added" : ""
  }`}
  onClick={() => {
    addToCart(product);
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1800);
  }}
>
  <ShoppingBag size={18} />

  {addedToCart
    ? "به سبد خرید اضافه شد ✓"
    : "افزودن به سبد خرید"}
</button>

            <button
  type="button"
  className={`product-wishlist ${
    isInWishlist(product.id) ? "active" : ""
  }`}
  onClick={() => toggleWishlist(product)}
>
  <Heart
    size={18}
    fill={
      isInWishlist(product.id)
        ? "currentColor"
        : "none"
    }
  />
</button>

          </div>

          {/* Service */}

          <div className="product-services">

            <div>
              <Truck size={19} />

              <span>
                ارسال سریع
              </span>
            </div>

            <div>
              <RotateCcw size={19} />

              <span>
                ضمانت بازگشت
              </span>
            </div>

            <div>
              <ShieldCheck size={19} />

              <span>
                تضمین اصالت
              </span>
            </div>

          </div>

        </motion.div>

      </div>

      <Link
        to="/shop/products"
        className="product-back-link"
      >
        <ArrowRight size={17} />
        بازگشت به مجموعه
      </Link>

    </section>
  );
}

export default ProductDetails;