import Main from "./layouts/Main";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/products/Products";
import CartDrawer from "./components/cart/CartDrawer";
import Auth from "./pages/Auth";
import CustomerProtected from "./layouts/CustomerProtected";
import Dashboard from "./pages/customers/Dashboard";

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<CustomerProtected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <CartDrawer />
    </Main>
  );
};

export default App;
