import React from "react";
import "./Navbar.css";

const Navbar = ({hamburger, hamburgerEvent, scrollUp, scrollUpHamburger}) =>{
    return(

        <>

            <div className="navbar">
                <p onClick={scrollUp}>BRA 🍺</p>

                <ul>
                    <li onClick={scrollUp}><p>Home</p></li>
                    <li><a href="https:/github.com">About</a></li>
                    <li><a href="https:/github.com">History</a></li>
                    <li><a href="https:/github.com">Recipes</a></li>
                </ul>

                <p 
                    className="hamburger" 
                    onClick={hamburgerEvent}
                >
                    {hamburger === true ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                </p>
            </div>

            {hamburger === true &&
                <div className="hamburger-list">
                    <ul>
                        <li onClick={scrollUpHamburger}><p><i className="fa fa-home"></i> Home</p></li>
                        <li onClick={hamburgerEvent}><a href="https:/github.com"><i className="fa fa-question-circle"></i> About</a></li>
                        <li onClick={hamburgerEvent}><a href="https:/github.com"><i className="fa fa-shield"></i> History</a></li>
                        <li onClick={hamburgerEvent}><a href="https:/github.com"><i className="fa fa-book"></i> Recipes</a></li>
                    </ul>
                </div>
            }
            
        </>

    );
};

export default Navbar;