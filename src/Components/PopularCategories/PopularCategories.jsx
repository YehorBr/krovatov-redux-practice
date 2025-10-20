import { useSelector } from "react-redux"
import { getFurniture } from "../../redux/selectors"
import { Link } from "react-router-dom"

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
    },[])
    
    // const categoryObj = {
    //     name: ,
    //     quantity,
    //     image:,
    // 

    return<>
        <h2>Популярні категорії</h2>
        <ul>
            {categories.map((category, idx)=>{
                    return <Link key={idx} to={``}>
                            <li>
                              <div>
                                <h3>{category.name}</h3>
                                <p>{category.quantity}</p>
                              </div>
                              <img src={category.image} alt="" width="250"/> 
                            </li>
                        </Link>
                })
            }
        </ul>
    </>
}