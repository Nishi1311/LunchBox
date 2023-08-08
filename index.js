import React from "react";
import  ReactDOM  from "react-dom/client";
//import AppMain from "./src/app";
import { approuter } from "./src/app";
import { RouterProvider } from "react-router-dom";
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter}/>)