
import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {


  return (
    <>
        <nav className="top-0 w-full h-16 bg-gray-700 text-white sticky
         flex justify-between items-center">
            <h1 className="text-3xl p-3">Employee</h1>
            <div className="space-x-4 p-3">
                <Link to="/employees" className="text-gray-500 hover:text-white">Employee</Link>
                <a href="" className="text-gray-500 hover:text-white">About</a>
                <a href="" className="text-gray-500 hover:text-white">Contact Us</a>
            </div>
        </nav>
        <div>
            <Outlet />
        </div>
    </>
  )
}

export default App
