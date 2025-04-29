import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Тортик Морозик</div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link to="/" className={styles.link}>Главная</Link>
        <Link to="/about" className={styles.link}>Обо мне</Link>
        <Link to="/cakes" className={styles.link}>Торты</Link>
        <Link to="/fillings" className={styles.link}>Начинки</Link>
        <Link to="/order" className={styles.link}>Заказ</Link>
      </nav>
      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </header>
  );
}

export default Header;
