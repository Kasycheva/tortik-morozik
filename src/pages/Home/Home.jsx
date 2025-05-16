import { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Home({ openOrderForm }) {
  const [subtitle, setSubtitle] = useState("");
  const fullText = "Нежные торты для особых моментов";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setSubtitle((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowCursor(false), 500);
    }
  }, [index]);

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Сладкие шедевры на заказ</h1>
        <p className={styles.subtitle}>
          {subtitle}
          <span className={`${styles.cursor} ${!showCursor ? styles.hidden : ""}`}>|</span>
        </p>
        <button className={styles.orderBtn} onClick={openOrderForm}>
          Заказать
        </button>
      </div>
    </div>
  );
}

export default Home;
