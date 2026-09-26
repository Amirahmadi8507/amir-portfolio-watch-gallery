import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import ShopHome from "./pages/shop/ShopHome";
import Products from "./pages/shop/Products";
import ProductDetails from "./pages/shop/ProductDetails";
import Categories from "./pages/shop/Categories";
import CategoryProducts from "./pages/shop/CategoryProducts";
import Search from "./pages/shop/Search";
import Cart from "./pages/shop/Cart";
import Wishlist from "./pages/shop/Wishlist";
import AboutShop from "./pages/shop/AboutShop";
import ContactShop from "./pages/shop/ContactShop";
import Auth from "./pages/shop/Auth";
import Account from "./pages/shop/Account";
import Orders from "./pages/shop/Orders";
import OrderDetails from "./pages/shop/OrderDetails";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/shop/Checkout";
import OrderSuccess from "./pages/shop/OrderSuccess";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./components/admin/AdminLayout";
import AdminProducts from "./pages/admin/AdminProducts";
import ProductForm from "./pages/admin/ProductForm";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminSettings from "./pages/admin/AdminSettings";
function App() {
  return (
    <BrowserRouter basename="/amir-portfolio-watch-gallery">
      <Routes>

        <Route element={<MainLayout />}>

          {/* Portfolio */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Watch Gallery */}

          <Route
            path="/shop"
            element={<ShopHome />}
          />

          <Route
            path="/shop/products"
            element={<Products />}
          />

          <Route
            path="/shop/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/shop/categories"
            element={<Categories />}
          />

          <Route
            path="/shop/category/:category"
            element={<CategoryProducts />}
          />

          <Route
            path="/shop/search"
            element={<Search />}
          />

          <Route
            path="/shop/cart"
            element={<Cart />}
          />
          <Route path="/shop/auth" element={<Auth />} />
          <Route path="/shop/account" element={<Account />} />
          <Route
  path="/shop/orders"
  element={<Orders />}
/>
<Route
  path="/shop/orders/:id"
  element={<OrderDetails />}
/>
          <Route
  path="/shop/checkout"
  element={<Checkout />}
/>

<Route
  path="/shop/order-success"
  element={<OrderSuccess />}
/>
          <Route
            path="/shop/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="/shop/about"
            element={<AboutShop />}
          />

          <Route
            path="/shop/contact"
            element={<ContactShop />}
          />
 <Route
  path="/admin"
  element={<AdminLayout />}
>
  <Route
    index
    element={<AdminDashboard />}
  />

  <Route
    path="products"
    element={<AdminProducts />}
  />
</Route>
<Route
  path="/admin/products/new"
  element={<ProductForm />}
/>
<Route
  path="/admin/products/edit/:id"
  element={<ProductForm />}
/>
<Route
  path="/admin/orders"
  element={<AdminOrders />}
/>
<Route
  path="/admin/users"
  element={<AdminUsers />}
/>
<Route
  path="/admin/messages"
  element={<AdminMessages />}
/>
<Route
  path="/admin/settings"
  element={<AdminSettings />}
/>
        </Route>
<Route
  path="*"
  element={<NotFound />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;