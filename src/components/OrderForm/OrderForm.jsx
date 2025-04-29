import { useState } from "react";
import styles from "./OrderForm.module.css";

function OrderForm({ isOpen, closeForm }) {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : ""}`} onClick={closeForm}>
      <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
        <h2>Оформить заказ</h2>
        <input type="text" placeholder="Ваше имя" />
        <input type="tel" placeholder="Ваш телефон" />
        <button className={styles.submitBtn}>Отправить</button>
        <span className={styles.closeBtn} onClick={closeForm}>✖</span>
      </div>
    </div>
  );
}

export default OrderForm;
