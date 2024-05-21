import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className={`app ${theme}`}>
        <Navbar setShowLogin={setShowLogin} />
        <DarkModeToggle theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
