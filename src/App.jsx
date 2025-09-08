import {RouterProvider} from "react-router-dom";
import { router } from "./routing";
import { GlobalStyle } from "./GlobalStyle";

export const App = () =>{
    return <>
        <RouterProvider router={router}/>
        <GlobalStyle/>
    </>

    
}