import { PopularProduct } from "../PopularProduct/PopularProduct";
import { News } from "../../Components/News/News";
import { Advantages } from "../Advantages/Andvantages";

export const HomePage = () => {
  return (
    <>
      <PopularProduct />;
      <Advantages />
      <News />
    </>
  );
};
