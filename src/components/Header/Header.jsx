import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png"; // путь к логотипу

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Тортик Морозик" className={styles.logoImage} />
      </Link>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link to="/" className={styles.link}>Главная</Link>
        <Link to="/about" className={styles.link}>Обо мне</Link>
        <Link to="/cakes" className={styles.link}>Торты</Link>
        <Link to="/fillings" className={styles.link}>Начинки</Link>
      </nav>

      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </header>
  );
}

export default Header;
