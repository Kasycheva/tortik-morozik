import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import OrderForm from "./components/OrderForm/OrderForm";
import About from "./pages/About/About";
import Category from "./pages/Category/Category";
import Catalog from "./pages/Catalog/Catalog";
import PopularFillings from "./pages/Fillings/PopularFillings";
import AllFillings from "./pages/Fillings/AllFillings";
import Footer from "./components/Footer/Footer";

function MainPage({ openOrderForm }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 200); 
      }
    }
  }, [location]);

  return (
    <>
      <section id="home"><Home openOrderForm={openOrderForm} /></section>
      <section id="about"><About /></section>
      <section id="catalog"><Catalog /></section>
      <section id="category"><Category /></section>
      <section id="fillings"><PopularFillings /></section>
      <Footer />
    </>
  );
}

function AllFillingsPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/#fillings");
  };

  return (
    <section>
      <button className="back-button" onClick={handleBackClick}>
        ← Назад к популярным начинкам
      </button>
      <AllFillings />
    </section>
  );
}

function App() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <TopBar openOrderForm={() => setIsOrderFormOpen(true)} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<MainPage openOrderForm={() => setIsOrderFormOpen(true)} />}
          />
          <Route path="/fillings/all" element={<AllFillingsPage />} />
          <Route
            path="/order"
            element={
              <OrderForm
                isOpen={isOrderFormOpen}
                closeForm={() => setIsOrderFormOpen(false)}
              />
            }
          />
        </Routes>

        {isOrderFormOpen && (
          <OrderForm
            isOpen={isOrderFormOpen}
            closeForm={() => setIsOrderFormOpen(false)}
          />
        )}
      </main>
    </Router>
  );
}

export default App;
