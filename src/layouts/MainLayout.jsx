import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";
import ShopHeader from "../components/shop/ShopHeader";
import FloatingNav from "../components/navigation/FloatingNav";

function MainLayout() {
  const location = useLocation();
  return (
    <div className="app-shell">

      <FloatingNav />
    {location.pathname.startsWith("/shop") && (
  <ShopHeader />
)}
      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">

          <div className="site-footer-brand">
            <div className="footer-logo">
              <span className="brand-dot"></span>
              <span>AM</span>
            </div>

            <p>
              طراحی و توسعه تجربه‌های دیجیتال مدرن،
              تعاملی و متفاوت.
            </p>
          </div>

          <div className="site-footer-links">
            <span>EXPLORE</span>

            <Link to="/">
  خانه
</Link>

<Link to="/portfolio">
  پورتفولیو
</Link>

<Link to="/shop">
  Watch Gallery
</Link>

<Link to="/contact">
  تماس
</Link>
          </div>

          <div className="site-footer-cta">
            <span>LET'S CREATE</span>

            <h3>
              یک تجربه
              <strong> متفاوت بسازیم.</strong>
            </h3>

            <Link to="/contact">
  شروع همکاری
  <ArrowUpLeft size={17} />
</Link>
          </div>

        </div>

        <div className="site-footer-bottom">
          <span>
            © 2026 AM — تمامی حقوق محفوظ است.
          </span>

          <span>
            Designed & Developed with React
          </span>
        </div>
      </footer>

    </div>
  );
}

export default MainLayout;