import React from "react";
import "./Navbar.css";

const Navbar = () =>{
    return(

        <>

            <div className="navbar">
                <p>BRA 🍺</p>

                <ul>
                    <li><p>Home</p></li>
                    <li><a href="https:/github.com">About</a></li>
                    <li><a href="https:/github.com">History</a></li>
                    <li><a href="https:/github.com">Recipes</a></li>
                </ul>
            </div>
            
        </>

    );
};

export default Navbar;