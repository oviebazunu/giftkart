import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRoutes from "./routers/ProtectedRoutes";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoutes>
                <Checkout />
              </ProtectedRoutes>
            }
          />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
