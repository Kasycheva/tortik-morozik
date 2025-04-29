import { Link } from "react-router-dom";
import styles from "./PopularFillings.module.css";

const popularFillings = [
  { id: 1, title: "Фруктовая", image: "/assets/images/fruit.jpg", description: "Ванильный бисквит с фруктами." },
  { id: 2, title: "Творожная", image: "/assets/images/cheese.jpg", description: "Нежный творожный крем." },
  { id: 3, title: "Шоколадная", image: "/assets/images/chocolate.jpg", description: "Шоколадный бисквит с кремом." },
  { id: 4, title: "Шоколадная смородина", image: "/assets/images/blackcurrant.jpg", description: "Какао бисквит с ягодами." },
  { id: 5, title: "Вишня в шоколаде", image: "/assets/images/cherry.jpg", description: "Шоколад с вишней." },
  { id: 6, title: "Грецкий орех", image: "/assets/images/walnut.jpg", description: "Ореховый бисквит с кремом." }
];

function PopularFillings() {
  return (
    <section className={styles.fillings} id="fillings">
      <h2>Популярные начинки</h2>
      <div className={styles.grid}>
        {popularFillings.map((filling) => (
          <div key={filling.id} className={styles.card}>
            <img src={filling.image} alt={filling.title} className={styles.image} />
            <h3>{filling.title}</h3>
            <p>{filling.description}</p>
          </div>
        ))}
      </div>

      {/* Кнопка ведёт на страницу "Все начинки" */}
      <Link to="/fillings/all" className={styles.button}>
        Все начинки
      </Link>
    </section>
  );
}

export default PopularFillings;
