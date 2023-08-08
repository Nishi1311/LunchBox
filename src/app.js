import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppMain=()=>{
    return(
        <>
       <Header/> 
       <Body/>
       </>
    )
}
export const approuter= createBrowserRouter([
    {
        path : '/',
        element: <AppMain/>,
        errorElement:<Error/>
    },
    {
        path : '/about',
        element: <About/>
    },
    {
        path : '/contact',
        element: <Contact/>
    }
])
export default AppMain;
