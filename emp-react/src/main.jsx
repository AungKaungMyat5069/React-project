import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EmployeeListComponent from "./components/EmployeeListComponent.jsx";
import EmployeeFormComponent from "./components/EmployeeFormComponent.jsx";


const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"employees",
                element:<EmployeeListComponent />
            },
            {
                path:"employee-form",
                element:<EmployeeFormComponent />
            },
            {
                path:"update-employee-form/:id",
                element:<EmployeeFormComponent/>
            }
        ]
    },

])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
