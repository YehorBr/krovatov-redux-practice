import { useSelector } from "react-redux"
import { getFurniture } from "../../redux/selectors"
import { Link } from "react-router-dom"
import { CategoriesContStl, CategoryItem, CategoryList } from "./PopularCategories.styled"
import { GoArrowUpRight } from "react-icons/go";    

export const PopularCategories = () =>{

    const furniture = useSelector(getFurniture)

    const categories = furniture.reduce((acc, product)=>{

        const {category, img} = product

        const isExist = acc.find((item)=>{ return item.name === category})

        if(isExist){
            isExist.quantity += 1
        }else{
            acc.push({
                name: category,
                quantity: 1,
                image: img,
            })
        }

        return acc
    },[]).slice(0,8)
    

    return<>
        <h2 style={{marginBottom: "25px"}}>Популярні категорії</h2>
        <CategoryList>
            {categories.map((category, idx)=>{
                    return <Link key={idx} to={``}>
                            <CategoryItem>
                              <CategoriesContStl>
                                <h3>{category.name}</h3>
                                <p>{category.quantity}</p>
                              </CategoriesContStl>
                              <img src={category.image} alt="" width="250" style={{height: "240px"}}/>
                              <GoArrowUpRight size={20} style={{position:"absolute", bottom: "5", right:"5",borderRadius: "50px", border: "2px solid #FFBC57", color:"#FFBC57", padding: "10px"}}/> 
                            </CategoryItem>
                        </Link>
                        
                })
            }
        </CategoryList>
    </>
}