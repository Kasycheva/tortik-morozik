import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ openOrderForm }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Тортик Морозик</Link> {/* Логотип теперь работает! */}
      </div>

      <nav className={styles.desktopMenu}>
        <ul>
          <li><Link to="/" onClick={() => scrollToSection("home")}>Главная</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("about")}>Обо мне</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("catalog")}>Торты</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("fillings")}>Начинки</Link></li>
          <li><button className={styles.orderBtn} onClick={openOrderForm}>Заказ</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
