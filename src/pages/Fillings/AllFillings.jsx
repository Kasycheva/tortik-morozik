import { Link } from "react-router-dom";
import styles from "./AllFillings.module.css";

const allFillings = [
  {
    id: 1,
    title: "Сникерс",
    image: "/images/fillings/Сникерс.jpg",
    description: "Нежные сочные шоколадные бисквиты, сливочная карамель с жареным арахисом, ганаш на молочном бельгийском шоколаде, карамельный сырно-сливочный крем.",
    ingredients: "Мука высшего сорта, какао-порошок Cacao Barry Extra Brute, сахар, растительное масло, сливочное масло, яйца, молоко, лимонный сок, уксус, сода, соль, ванильный экстракт, творожный сыр, сливки 33%, сахарная пудра, молочный бельгийский шоколад Barry Callebaut, жареный арахис. Возможно изготовление данной начинки без жареного арахиса."
  },
  {
    id: 2,
    title: "Красный бархат с клубникой",
    image: "/images/fillings/Красный бархат с клубникой.jpg",
    description: "Нежные сочные бисквиты «красный бархат», клубничная начинка и крем-чиз.",
    ingredients: "Мука высшего сорта, сливочное масло 82,5%, растительное масло, сахар, яйца, кефир, кукурузный крахмал, сода, какао-порошок, соль, ваниль, уксус, краситель, клубника, творожный сыр, маскарпоне, сливки, пудра."
  },
  {
    id: 3,
    title: "Морковный с карамелью",
    image: "/public/images/fillings/морковный с карамелью.jpg",
    description: "Пряные морковные бисквиты со специями и карамелизированным пеканом в сочетании с карамелью тофифи и творожно-сливочным кремом.",
    ingredients: "Мука, растительное и сливочное масло, сахар, яйца, морковь, сода, специи, пекан, творожный сыр, маскарпоне, сливки, глюкоза, сгущёнка."
  },
  {
    id: 4,
    title: "Прага",
    image: "/images/fillings/Прага.jpg",
    description: "Советская классика. Шоколадные бисквиты, пражский крем и абрикосовый джем.",
    ingredients: "Мука, какао, сахар, масло, яйца, молоко, джем, сгущёнка, ваниль."
  },
  {
    id: 5,
    title: "Шоколад-вишня",
    image: "/images/fillings/Шоколад-вишня.jpg",
    description: "Шоколадные бисквиты с вишнёвой начинкой и крем-чизом.",
    ingredients: "Мука, какао, сахар, вишня, крахмал, сливки, творожный сыр, маскарпоне."
  },
  {
    id: 6,
    title: "Молочная девочка с клубникой",
    image: "/images/fillings/Молочная девочка с клубникой.jpg",
    description: "Нежные коржи на сгущёнке, крем пломбир и клубничный конфитюр.",
    ingredients: "Мука, сгущёнка, яйца, масло, клубника, творожный сыр, сливки."
  },
  {
    id: 7,
    title: "Фисташка-малина",
    image: "/images/fillings/Фисташка-малина.jpg",
    description: "Фисташковые бисквиты, малиновый конфитюр, фисташковый крем-чиз.",
    ingredients: "Мука, фисташки, масло, яйца, малина, сливки, сыр, пудра."
  },
  {
    id: 8,
    title: "Ленинградский",
    image: "/public/images/fillings/Ленинрадский.jpg",
    description: "Песочные коржи с кремом Шарлотт и какао.",
    ingredients: "Мука, масло, яйца, пудра, молоко, коньяк, ваниль."
  },
  {
    id: 9,
    title: "Орео",
    image: "/images/fillings/Орео.jpg",
    description: "Шоколадные бисквиты, чизкейк и крем с Орео.",
    ingredients: "Мука, какао, масло, яйца, молоко, сливки, творожный сыр, Орео."
  },
  {
    id: 10,
    title: "Тропик",
    image: "/images/fillings/Тропик.jpg",
    description: "Бисквит с кокосом, мусс манго-маракуйя, ананас и крем с белым шоколадом.",
    ingredients: "Мука, яйца, кокос, пюре манго, маракуйя, ананас, шоколад, сыр, сливки."
  },
  {
    id: 11,
    title: "Панчо с ананасами",
    image: "/images/fillings/nofoto_31.jpg",
    description: "Бисквиты с какао, грецкие орехи, сметанный крем, ананасы.",
    ingredients: "Мука, какао, орехи, сметана, сахар, ананасы, яйца."
  },
  {
    id: 12,
    title: "Современный медовик",
    image: "/images/fillings/nofoto_31.jpg",
    description: "Медовые коржи с крем-брюле на основе творожного сыра и сливок.",
    ingredients: "Мука, мёд, яйца, масло, сахар, творожный сыр, сливки, ваниль."
  },
  {
    id: 13,
    title: "Вишня-кокос с чизкейком",
    image: "/images/fillings/nofoto_31.jpg",
    description: "Ореховые бисквиты с кокосом, вишнёвый конфитюр и чизкейк.",
    ingredients: "Орехи, мука, яйца, кокос, вишня, сахар, сливки, творожный сыр."
  },
  {
    id: 14,
    title: "Двойной шоколад",
    image: "/images/fillings/nofoto_31.jpg",
    description: "Шоколадные бисквиты и ганаш на молочном бельгийском шоколаде.",
    ingredients: "Мука, какао, яйца, масло, сахар, сливки, молочный шоколад Barry Callebaut."
  },
  {
    id: 15,
    title: "Красный бархат",
    image: "/images/fillings/nofoto_31.jpg",
    description: "Классический крем-чиз с ванилью.",
    ingredients: "Мука, сливочное масло, яйца, какао, сахар, краситель, уксус, творожный сыр, сливки, ваниль."
  }
];

function AllFillings() {
  return (
    <section className={styles.fillings}>
      <h2 className={styles.title}>Все начинки</h2>
      <Link to="/#fillings" className={styles.backButton}>← Назад к популярным начинкам</Link>

      <div className={styles.grid}>
        {allFillings.map(filling => (
          <div key={filling.id} className={styles.card}>
            <img src={filling.image} alt={filling.title} className={styles.image} />
            <h3 className={styles.fillingTitle}>{filling.title}</h3>
            <p className={styles.description}>{filling.description}</p>
            <p className={styles.ingredients}><strong>Состав:</strong> {filling.ingredients}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllFillings;
