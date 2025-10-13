import {RouterProvider} from "react-router-dom";
import { router } from "./routing";
import { GlobalStyle } from "./GlobalStyle";
import { CatalogMenu } from "./Pages/Catalog/Catalog";


export const App = () =>{
    return <>
        <RouterProvider router={router}/>
        <CatalogMenu/>
        <GlobalStyle/>

    </>

    
}