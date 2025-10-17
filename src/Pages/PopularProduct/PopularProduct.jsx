import { useSelector } from "react-redux";
import { OneProduct } from "./OneProduct";
import { getFurniture } from "../../redux/selectors";

export const PopularProduct = () => {
  const furniture = useSelector(getFurniture);
  const popularFurniture = furniture.slice(0, 8);
  return (
    <ul>
      {popularFurniture.map((item) => (
        <OneProduct
          key={item.id}
          name={item.name}
          available={item.available}
          price={item.price}
          image={item.img}
        />
      ))}
    </ul>
  );
};
