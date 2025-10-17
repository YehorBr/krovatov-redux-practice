export const OneProduct = (props) => {
  const avaibleText = props.available ? "В наявності" : "Немає в наявності";
  return (
    <li>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <p>{avaibleText}</p>
    </li>
  );
};
