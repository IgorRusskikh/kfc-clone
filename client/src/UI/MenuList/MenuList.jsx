import MenuGrid from "../MenuGrid/MenuGrid";
import styles from "./MenuList.module.css";

export default () => {
  const itemArray = [
    {
      id: 1,
      image: "https://s82079.cdn.ngenix.net/330x0/9u90mlktsxio2or3qhpi29e8vqmv",
      name: 'Бургер "Трюфель"',
      price: 259,
    },
    {
      id: 2,
      image: "https://s82079.cdn.ngenix.net/330x0/r7inhvo06duhpruaanoclqq2npgk",
      name: '2 Стрипса "Трюфель"',
      price: 169,
    },
    {
      id: 3,
      image: "https://s82079.cdn.ngenix.net/330x0/abdar33iv38pj4cqylrr3ldpr9yi",
      name: 'Мега ролл "Трюфель"',
      price: 349,
    },
    {
      id: 4,
      image: "https://s82079.cdn.ngenix.net/330x0/9u90mlktsxio2or3qhpi29e8vqmv",
      name: 'Бургер "Трюфель"',
      price: 259,
    },
    {
      id: 5,
      image: "https://s82079.cdn.ngenix.net/330x0/abdar33iv38pj4cqylrr3ldpr9yi",
      name: 'Мега ролл "Трюфель"',
      price: 349,
    },
  ];

  return (
    <div className={styles.menuListContainer}>
      <MenuGrid items={itemArray}>Новинки</MenuGrid>
      <MenuGrid items={itemArray}>Ланчи и Комбо</MenuGrid>
      <MenuGrid items={itemArray}>Ланчи и Комбо</MenuGrid>
    </div>
  );
};
