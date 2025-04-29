import styles from "./Category.module.css";
import { useParams } from "react-router-dom";

const categoryData = {
  kids: ["kids1.jpg", "kids2.jpg", "kids3.jpg"],
  wedding: ["wedding1.jpg", "wedding2.jpg", "wedding3.jpg"],
  corporate: ["corporate1.jpg", "corporate2.jpg", "corporate3.jpg"],
  celebration: ["celebration1.jpg", "celebration2.jpg", "celebration3.jpg"],
  cupcakes: ["cupcakes1.jpg", "cupcakes2.jpg", "cupcakes3.jpg"],
  macarons: ["macarons1.jpg", "macarons2.jpg", "macarons3.jpg"],
};

function Category() {
  const { category } = useParams();
  const images = categoryData[category] || [];

  return (
    <section className={styles.category}>
      <h2 className={styles.title}>Категория: {category || "Неизвестная"}</h2>
      <div className={styles.gallery}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <img key={index} src={`/assets/images/${image}`} alt={category} className={styles.image} />
          ))
        ) : (
          <p>Изображения не найдены.</p>
        )}
      </div>
    </section>
  );
}

export default Category;
