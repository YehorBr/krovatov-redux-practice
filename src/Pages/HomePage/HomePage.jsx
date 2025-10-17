import { PopularProduct } from "../PopularProduct/PopularProduct";
import { News } from "../../Components/News/News";
import { PopularCategories } from "../../Components/PopularCategories/PopularCategories";

export const HomePage = () => {
  return  <>

      <PopularCategories/>
      
      <PopularProduct />;

      <News/>
  </>

  
};
