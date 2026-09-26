import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import ProductProvider from "./context/ProductProvider";

import App from "./App";

import "./styles/globals.css";
import "./styles/admin.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    <AuthProvider>

      <CartProvider>

        <WishlistProvider>

          <ProductProvider>

            <App />

          </ProductProvider>

        </WishlistProvider>

      </CartProvider>

    </AuthProvider>

  </StrictMode>
);