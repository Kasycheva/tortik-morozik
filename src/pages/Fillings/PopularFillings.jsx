import { useNavigate } from "react-router-dom";
import styles from "./PopularFillings.module.css";

const popularFillings = [
  {
    id: 1,
    title: "Сникерс",
    image: "/images/fillings/Сникерс.jpg",
    description: "Нежные шоколадные бисквиты, карамель, арахис, ганаш.",
    ingredients: "Мука, какао, сахар, масло, яйца, арахис, шоколад, творожный сыр, сливки."
  },
  {
    id: 2,
    title: "Красный бархат с клубникой",
    image: "/images/fillings/Красный бархат с клубникой.jpg",
    description: "Бисквиты «красный бархат», клубничная начинка и крем-чиз.",
    ingredients: "Мука, сливочное масло, сахар, яйца, клубника, сыр, сливки, краситель."
  },
  {
    id: 3,
    title: "Морковный с карамелью",
    image: "/public/images/fillings/морковный с карамелью.jpg",
    description: "Морковные бисквиты с карамелизированным пеканом и кремом.",
    ingredients: "Морковь, мука, масло, пекан, сахар, яйца, сливки, сыр."
  },
  {
    id: 4,
    title: "Прага",
    image: "/images/fillings/Прага.jpg",
    description: "Классика: шоколадные бисквиты, пражский крем и абрикос.",
    ingredients: "Мука, какао, масло, сахар, яйца, джем, сгущёнка."
  },
  {
    id: 5,
    title: "Шоколад-вишня",
    image: "/images/fillings/Шоколад-вишня.jpg",
    description: "Шоколадные бисквиты, вишнёвая начинка и крем-чиз.",
    ingredients: "Мука, какао, вишня, сахар, сливки, сыр, маскарпоне."
  },
  {
    id: 6,
    title: "Молочная девочка с клубникой",
    image: "/images/fillings/Молочная девочка с клубникой.jpg",
    description: "Нежные коржи на сгущёнке, крем пломбир и клубничный конфитюр.",
    ingredients: "Мука, сгущёнка, яйца, клубника, сливки, творожный сыр."
  }
];

function PopularFillings() {
  const navigate = useNavigate();

  const goToAllFillings = () => {
    navigate("/fillings/all");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.fillings} id="fillings">
      <h2 className={styles.title}>Популярные начинки</h2>

      <div className={styles.grid}>
        {popularFillings.map((filling) => (
          <div key={filling.id} className={styles.card}>
            <img src={filling.image} alt={filling.title} className={styles.image} />
            <h3 className={styles.fillingTitle}>{filling.title}</h3>
            <p className={styles.description}>{filling.description}</p>
            <p className={styles.ingredients}><strong>Состав:</strong> {filling.ingredients}</p>
          </div>
        ))}
      </div>

      <button onClick={goToAllFillings} className={styles.button}>
        Все начинки →
      </button>
    </section>
  );
}

export default PopularFillings;
