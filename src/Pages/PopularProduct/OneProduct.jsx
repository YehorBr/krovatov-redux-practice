import {
  ProductImg,
  ProductItem,
  ProductName,
  ProductPrice,
} from "../../Styles/PopularProductStyle";

export const OneProduct = (props) => {
  const avaibleText = props.available ? "В наявності" : "Немає в наявності";
  return (
    <ProductItem>
      <ProductImg src={props.image} alt={props.name} />
      <ProductName>{props.name}</ProductName>
      <ProductPrice>Price: ${props.price}</ProductPrice>
      <p>{avaibleText}</p>
    </ProductItem>
  );
};
