import { OneProduct } from "./OneProduct";

export const PopularProduct = () => {
  return (
    <>
      <h2>Найпопулярніші продукти</h2>
      <ul>
        {[
          { name: "ліжко", price: 200 },
          { name: "шафа", price: 300 },
          { name: "комод", price: 150 },
        ].map((item) => (
          <li>
            <OneProduct price={item.price} name={item.name} />
          </li>
        ))}
      </ul>
    </>
  );
};
