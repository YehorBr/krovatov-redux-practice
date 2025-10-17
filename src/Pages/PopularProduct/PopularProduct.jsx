import { useSelector } from "react-redux";
import { OneProduct } from "./OneProduct";

export const PopularProduct = () => {
  const furniture = useSelector((state) => state.furniture.items);
  const popularFurniture = furniture.slice(0, 8);
  return (
    <ul>
      {popularFurniture.map((item) => (
        <OneProduct
          key={item.id}
          name={item.name}
          available={item.available}
          price={item.price}
          image={item.image}
        />
      ))}
    </ul>
  );
};
