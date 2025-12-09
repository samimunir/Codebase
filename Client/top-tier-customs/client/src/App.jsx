import Main from "./layouts/Main";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/products/Products";
import CartDrawer from "./components/cart/CartDrawer";

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <CartDrawer />
    </Main>
  );
};

export default App;
