import styles from "./About.module.css";
import { Typewriter } from "react-simple-typewriter";

function About() {
  return (
    <>
      {/* Разделитель "Обо мне" */}
      <div className={styles.separator}>
        <h2 className={styles.sectionTitle}>Обо мне</h2>
      </div>

      {/* Контент */}
      <section className={styles.about}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <Typewriter
              words={["Здравствуйте, меня зовут Алена."]}
              loop={1}
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className={styles.text}>
            Я — домашний кондитер с более чем 10-летним стажем. Здесь вы можете выбрать торт,
            приуроченный к вашему событию, его начинку, вес и наполнение.  
            Если у вас есть готовый дизайн, просто прикрепите его к форме заказа,
            укажите начинку и вес, и я с удовольствием приготовлю его для вас к необходимой дате!
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
