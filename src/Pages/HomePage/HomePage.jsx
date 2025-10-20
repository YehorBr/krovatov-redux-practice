import { PopularProduct } from "../PopularProduct/PopularProduct";
import { News } from "../../Components/News/News";
import { Advantages } from "../Advantages/Andvantages";
import { PopularCategories } from "../../Components/PopularCategories/PopularCategories";
import { CatalogMenu } from "../Catalog/Catalog";
import KrovatoInfo from "../../Components/KrovatoInfo/KrovatoInfo";


export const HomePage = () => {
  return  <>
      <CatalogMenu/>
      <PopularCategories/>
      <PopularProduct />;
      <Advantages />
      <News />
       <KrovatoInfo /> 
    </>
};
