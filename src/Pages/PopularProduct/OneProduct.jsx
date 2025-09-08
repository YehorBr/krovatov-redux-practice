export const OneProduct = (props) => {
  return (
    <>
      <div>
        <p>
          {props.name} - {props.price} грн
        </p>
      </div>
    </>
  );
};
