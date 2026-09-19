import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";

import { useCart } from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

function ShopHeader() {
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="shop-header">
      <div className="shop-header-brand">
        <Link to="/shop">
          <span className="brand-dot"></span>
          <div>
            <strong>AM</strong>
            <span>WATCH GALLERY</span>
          </div>
        </Link>
      </div>

      <nav className="shop-header-links">
        <Link to="/shop">خانه</Link>
        <Link to="/shop/products">محصولات</Link>
        <Link to="/shop/categories">دسته‌بندی‌ها</Link>
        <Link to="/shop/about">درباره ما</Link>
      </nav>

      <div className="shop-header-actions">
        <Link
          to="/shop/search"
          className="shop-header-icon"
          aria-label="جستجو"
        >
          <Search size={18} />
        </Link>

        <Link
          to="/shop/wishlist"
          className="shop-header-icon"
          aria-label="علاقه‌مندی‌ها"
        >
          <Heart size={18} />

          {wishlist.length > 0 && (
            <span>{wishlist.length}</span>
          )}
        </Link>

        <Link
          to="/shop/cart"
          className="shop-header-icon"
          aria-label="سبد خرید"
        >
          <ShoppingCart size={18} />

          {cartCount > 0 && (
            <span>{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default ShopHeader;