import { useSelector } from "react-redux";
import { OneProduct } from "./OneProduct";
import { getFurniture } from "../../redux/selectors";
import { ProductList } from "../../Styles/PopularProductStyle";

export const PopularProduct = () => {
  const furniture = useSelector(getFurniture);
  const popularFurniture = furniture.slice(0, 8);
  return (
    <ProductList>
      {popularFurniture.map((item) => (
        <OneProduct
          key={item.id}
          name={item.name}
          available={item.available}
          price={item.price}
          image={item.img}
        />
      ))}
    </ProductList>
  );
};
