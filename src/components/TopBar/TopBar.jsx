import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";
import logo from "../../assets/images/logo.png";

function TopBar({ openOrderForm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={styles.topbar}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Тортик Морозик" className={styles.logoImage} />
        </Link>

        <nav className={styles.desktopMenu}>
          <ul>
            <li><Link to="/" onClick={() => scrollToSection("home")}>Главная</Link></li>
            <li><Link to="/" onClick={() => scrollToSection("about")}>Обо мне</Link></li>
            <li><Link to="/" onClick={() => scrollToSection("catalog")}>Торты</Link></li>
            <li><Link to="/" onClick={() => scrollToSection("fillings")}>Начинки</Link></li>
          </ul>
        </nav>

        <div className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ""}`} />
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ""}`} />
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ""}`} />
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => scrollToSection("home")}>Главная</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("about")}>Обо мне</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("catalog")}>Торты</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("fillings")}>Начинки</Link></li>
          <li><button className={styles.orderBtn} onClick={openOrderForm}>Заказ</button></li>
        </ul>
      </div>

      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default TopBar;
