import { Link } from "react-router-dom";
import styles from "./AllFillings.module.css";

const allFillings = [
  { id: 1, title: "Фруктовая", image: "/assets/images/fruit.jpg", description: "Ванильный бисквит с фруктами." },
  { id: 2, title: "Сырная", image: "/assets/images/cheese.jpg", description: "Сырный крем с лимоном." },
  { id: 3, title: "Шоколадная", image: "/assets/images/chocolate.jpg", description: "Шоколадный бисквит с кремом." },
  { id: 4, title: "Шоколадная смородина", image: "/assets/images/blackcurrant.jpg", description: "Какао бисквит с ягодами." },
  { id: 5, title: "Вишня в шоколаде", image: "/assets/images/cherry.jpg", description: "Шоколад с вишней." },
  { id: 6, title: "Грецкий орех", image: "/assets/images/walnut.jpg", description: "Ореховый бисквит с кремом." },
  { id: 7, title: "Карамель", image: "/assets/images/caramel.jpg", description: "Карамельный крем с орехами." },
  { id: 8, title: "Кокосовая", image: "/assets/images/coconut.jpg", description: "Кокосовый крем с ананасом." },
  { id: 9, title: "Фисташковая", image: "/assets/images/pistachio.jpg", description: "Фисташковый крем с ягодами." },
  { id: 10, title: "Малиновая", image: "/assets/images/raspberry.jpg", description: "Фруктовая прослойка с малиной." },
  { id: 11, title: "Йогуртовая", image: "/assets/images/yogurt.jpg", description: "Нежный йогуртовый крем." },
  { id: 12, title: "Лесной орех", image: "/assets/images/hazelnut.jpg", description: "Ореховый крем с карамелью." },
  { id: 13, title: "Сникерс", image: "/assets/images/snickers.jpg", description: "Арахисовый бисквит с карамелью." },
  { id: 14, title: "Медовик", image: "/assets/images/honey.jpg", description: "Медовые коржи с кремом." },
  { id: 15, title: "Красный бархат", image: "/assets/images/redvelvet.jpg", description: "Кремовый чиз с ванилью." }
];

function AllFillings() {
  return (
    <section className={styles.fillings}>
      <h2 className={styles.title}>Все начинки</h2>

      {/* Кнопка назад на главную */}
      <Link to="/" className={styles.backButton}>← Назад к популярным начинкам</Link>

      <div className={styles.grid}>
        {allFillings.map((filling) => (
          <div key={filling.id} className={styles.card}>
            <img src={filling.image} alt={filling.title} className={styles.image} />
            <h3>{filling.title}</h3>
            <p>{filling.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllFillings;
