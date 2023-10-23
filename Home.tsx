import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import './tailwind.css'


const Home: React.FC = () => {

    return(
    <div>
        <strong className="text-xl font-bold mb-4"> Welcome to React Typescript App</strong><br/>
        <NavLink to="/signup">
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">
                SignUp
              </button>
            </NavLink>
        
        <br/>
        <hr/>
        <NavLink to="/signin">If already registered then
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">
                SignIn
              </button>
            </NavLink>
        
        
    </div>
    )
}

    export default Home;