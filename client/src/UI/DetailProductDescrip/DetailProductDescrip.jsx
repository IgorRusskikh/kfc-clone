import styles from "./DetailProductDescrip.module.css";

export default () => {
  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.productWeight}>304г</div>
      <div className={styles.descritionContent}>
        Встречайте новинку для настоящих ценителей высокой кухни ! Изысканный и
        большой Мега Ролл "Трюфель" - это хрустящая пшеничная тортилья с нежными
        куриными стрипсами в оригинальной панировке, а также сочные овощи с
        любимым картофелем фри. Всё это заправлено несравнимым нежным соусом со
        вкусом трюфеля, который придаёт блюду элегантный и аристократичный вкус!
        Настоящее наслаждение для гурманов! Успейте попробовать в KFC. *Внешний
        вид продукта может отличаться от изображения.
      </div>
    </div>
  );
};