import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CreditCard,
  MapPin,
  UserRound,
  ShoppingBag,
} from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import { useCart } from "../../hooks/useCart";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    cartCount,
    cartTotal,
    clearCart,
  } = useCart();

  const handleSubmit = (event) => {
    event.preventDefault();

    clearCart();

    navigate("/shop/order-success");
  };

  if (cart.length === 0) {
    return (
      <section className="checkout-empty">
        <ShoppingBag size={45} />

        <h1>سبد خرید خالی است</h1>

        <p>
          برای ثبت سفارش ابتدا یک محصول به سبد خرید
          اضافه کنید.
        </p>

        <Link to="/shop/products">
          مشاهده محصولات
          <ArrowRight size={17} />
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <span>CHECKOUT</span>

        <h1>ثبت سفارش</h1>

        <p>
          اطلاعات خود را وارد کنید تا سفارش شما
          به صورت نمایشی ثبت شود.
        </p>
      </div>

      <form
        className="checkout-layout"
        onSubmit={handleSubmit}
      >
        <GlassCard className="checkout-form-card">
          <div className="checkout-section-title">
            <UserRound size={19} />

            <div>
              <span>PERSONAL INFORMATION</span>
              <h2>اطلاعات شخصی</h2>
            </div>
          </div>

          <div className="checkout-fields">
            <label>
              نام و نام خانوادگی
              <input
                type="text"
                placeholder="مثلاً امیر احمدی"
                required
              />
            </label>

            <label>
              شماره موبایل
              <input
                type="tel"
                placeholder="09xxxxxxxxx"
                required
              />
            </label>

            <label>
              ایمیل
              <input
                type="email"
                placeholder="example@email.com"
                required
              />
            </label>
          </div>

          <div className="checkout-section-title">
            <MapPin size={19} />

            <div>
              <span>SHIPPING ADDRESS</span>
              <h2>آدرس ارسال</h2>
            </div>
          </div>

          <div className="checkout-fields">
            <label>
              شهر
              <input
                type="text"
                placeholder="مثلاً تهران"
                required
              />
            </label>

            <label className="checkout-full">
              آدرس کامل
              <textarea
                rows="5"
                placeholder="آدرس کامل خود را وارد کنید..."
                required
              />
            </label>

            <label>
              کد پستی
              <input
                type="text"
                placeholder="کد پستی"
                required
              />
            </label>
          </div>

          <div className="checkout-section-title">
            <CreditCard size={19} />

            <div>
              <span>PAYMENT</span>
              <h2>روش پرداخت</h2>
            </div>
          </div>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              defaultChecked
            />

            <div>
              <strong>پرداخت نمایشی</strong>

              <span>
                در نسخه فعلی، پرداخت واقعی فعال نیست.
              </span>
            </div>
          </label>

          <button
            type="submit"
            className="checkout-submit"
          >
            ثبت سفارش
            <ArrowRight size={18} />
          </button>
        </GlassCard>

        <GlassCard className="checkout-summary">
          <span>ORDER SUMMARY</span>

          <h2>خلاصه سفارش</h2>

          <div className="checkout-products">
            {cart.map((item) => (
              <div
                key={item.id}
                className="checkout-product"
              >
                <div className="checkout-product-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div>
                  <strong>{item.name}</strong>

                  <span>
                    {item.quantity.toLocaleString("fa-IR")}
                    {" × "}
                    {item.price.toLocaleString("fa-IR")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary-row">
            <span>تعداد</span>

            <strong>
              {cartCount.toLocaleString("fa-IR")}
            </strong>
          </div>

          <div className="checkout-summary-row">
            <span>ارسال</span>

            <strong>رایگان</strong>
          </div>

          <div className="checkout-total">
            <span>مبلغ نهایی</span>

            <strong>
              {cartTotal.toLocaleString("fa-IR")}
              <small> تومان</small>
            </strong>
          </div>
        </GlassCard>
      </form>
    </section>
  );
}

export default Checkout;