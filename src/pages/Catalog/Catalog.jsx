import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";

// Импорт изображений
import kidsImg from "../../assets/images/kids.jpg";
import weddingImg from "../../assets/images/wedding.jpg";
import corporateImg from "../../assets/images/corporate.jpg";
import celebrationImg from "../../assets/images/celebration.jpg";
import cupcakesImg from "../../assets/images/cupcakes.jpg";
import macaronsImg from "../../assets/images/macarons.jpg";

// Данные категорий
const categories = [
  { id: 1, title: "Детские", image: kidsImg, link: "/category/kids" },
  { id: 2, title: "Свадебные", image: weddingImg, link: "/category/wedding" },
  { id: 3, title: "Корпоративные", image: corporateImg, link: "/category/corporate" },
  { id: 4, title: "Праздничные", image: celebrationImg, link: "/category/celebration" },
  { id: 5, title: "Капкейки", image: cupcakesImg, link: "/category/cupcakes" },
  { id: 6, title: "Макаруны", image: macaronsImg, link: "/category/macarons" },
];

function Catalog() {
  return (
    <section className={styles.catalog}>
      <h2 className={styles.title}>Выберите категорию</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link key={category.id} to={category.link} className={styles.card}>
            <img src={category.image} alt={category.title} className={styles.image} />
            <div className={styles.overlay}></div>
            <h3 className={styles.cardTitle}>{category.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Catalog;
