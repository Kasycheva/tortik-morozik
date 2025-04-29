import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import OrderForm from "./components/OrderForm/OrderForm";
import About from "./pages/About/About";
import Category from "./pages/Category/Category";
import Catalog from "./pages/Catalog/Catalog";
import PopularFillings from "./pages/Fillings/PopularFillings";
import AllFillings from "./pages/Fillings/AllFillings";
import Footer from "./components/Footer/Footer";

function MainPage({ openOrderForm }) {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="catalog"><Catalog /></section>
      <section id="category"><Category /></section>
      <section id="fillings"><PopularFillings /></section>
      <Footer />
    </>
  );
}

function AllFillingsPage() {
  return (
    <section>
      <Link to="/" className="back-button">← Назад к популярным начинкам</Link>
      <AllFillings />
    </section>
  );
}

function App() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <Router>
      <Navbar openOrderForm={() => setIsOrderFormOpen(true)} />

      <main>
        <Routes>
          {/* Главная со всеми секциями */}
          <Route path="/" element={<MainPage openOrderForm={() => setIsOrderFormOpen(true)} />} />

          {/* Все начинки */}
          <Route path="/fillings/all" element={<AllFillingsPage />} />

          {/* Страница с заказом */}
          <Route path="/order" element={<OrderForm isOpen={isOrderFormOpen} closeForm={() => setIsOrderFormOpen(false)} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
