import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import Loader from "./components/Loader/Loader";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [theme, setTheme] = useState("light");

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 7000);
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    html.style.overflow = !loaded ? "hidden" : "auto";
  }, [loaded]);

  useEffect(() => {
    const html = document.querySelector("html");
    html.style.overflow = showLogin ? "hidden" : "auto";
  }, [showLogin]);
  return (
    <>
      {loaded ? null : <Loader />}
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
