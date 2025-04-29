import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import cakeVideo from "../../assets/videos/cake-video.mp4";

function Home() {
  const [subtitle, setSubtitle] = useState("");
  const fullText = "Нежные торты для особых моментов";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setSubtitle((prev) => prev + fullText[index]); // Используем prev
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowCursor(false), 500);
    }
  }, [index]); // Убрали `subtitle` из зависимостей

  return (
    <div className={styles.hero}>
      <video autoPlay muted loop className={styles.video}>
        <source src={cakeVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      <div className={styles.overlay}>
        <h1 className={styles.title}>Сладкие шедевры на заказ</h1>
        <p className={styles.subtitle}>
          {subtitle}
          <span className={`${styles.cursor} ${!showCursor ? styles.hidden : ""}`}>|</span>
        </p>
        <a href="#order" className={styles.orderBtn}>
          Заказать
        </a>
      </div>
    </div>
  );
}

export default Home;
