import React from "react";
import Navbar from "./components/Navbar";

const App = () =>{

    const [hamburger, setHamburger] = React.useState(false);

    const hamburgerEvent = () =>{
        setHamburger(!hamburger);
    };

    const scrollUp = () =>{
        document.body.scrollIntoView();
    };
    const scrollUpHamburger = () =>{
        document.body.scrollIntoView();
        setHamburger(!hamburger);
    };

    return(

        <div>

            <Navbar 
                hamburger={hamburger}
                hamburgerEvent={hamburgerEvent}
                scrollUp={scrollUp}
                scrollUpHamburger={scrollUpHamburger}
            />

        </div>

    );
};

export default App;