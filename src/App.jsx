import {RouterProvider} from "react-router-dom";
import { router } from "./routing";
import { GlobalStyle } from "./GlobalStyle";
import { CatalogMenu } from "./Pages/Catalog/Catalog";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllFurnitures } from "./redux/operations";


export const App = () =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllFurnitures())
    },[])

    return <>
        <RouterProvider router={router}/>
        <GlobalStyle/>

    </>

    
}