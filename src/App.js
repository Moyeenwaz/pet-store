import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Favourite from "./pages/Favourite/Favourite";
import Loginn from "./pages/Login/Loginn";
import Signin from "./pages/Signin/Signin";
import Empty from "./pages/EmptyCart/Empty";
import EmptySection from "./pages/EmptyFav/Empty";
import Cart from "./pages/EmptyCart/Cart";
import { Routes, Route } from "react-router-dom";

import "@splidejs/react-splide/css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="shop" element={<Store />} />
          <Route path="login" element={<Loginn />} />
          <Route path="signin" element={<Signin />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favourite" element={<Favourite />} />
          {/* <Route path="empty" element={ <Store /> } /> */}
          <Route path="shop" element={<Store />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
