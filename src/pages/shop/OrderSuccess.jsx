import { Link } from "react-router-dom";
import {
  Check,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

import { motion } from "framer-motion";

function OrderSuccess() {
  return (
    <section className="order-success-page">
      <motion.div
        className="order-success-card"
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <motion.div
          className="order-success-icon"
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <Check size={32} />
        </motion.div>

        <span>ORDER COMPLETED</span>

        <h1>
          سفارش شما
          <strong> با موفقیت ثبت شد.</strong>
        </h1>

        <p>
          ممنون که AM Watch Gallery را انتخاب کردید.
          این سفارش در نسخه فعلی پروژه به صورت
          نمایشی ثبت شده است.
        </p>

        <div className="order-success-actions">
          <Link to="/shop/products">
            ادامه خرید
            <ShoppingBag size={17} />
          </Link>

          <Link to="/shop">
            بازگشت به فروشگاه
            <ArrowLeft size={17} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default OrderSuccess;