import { useSelector } from "react-redux"
import { getFurniture } from "../../redux/selectors"

export const PopularCategories = () =>{

    const furniture = useSelector(getFurniture)

    console.log(furniture);

    // const categoryObj = {
    //     name: ,
    //     quantity,
    //     image:,
    // }

    return<>
        <h2>Популярні категорії</h2>
        <ul>
            {
                ()=>{
                    return <Link to={``}>
                            <li>
                              <div>
                                <h3></h3>
                                <p></p>
                              </div>
                              <img src="" alt="" /> 
                            </li>
                        </Link>
                }
            }
        </ul>
    </>
}