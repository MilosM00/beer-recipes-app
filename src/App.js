import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import History from "./components/History";
import Recipes from "./components/Recipes";

const App = () =>{

    const [hamburger, setHamburger] = React.useState(false);

    const [recipes, setRecipes] = React.useState([]);

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

    
    React.useEffect(() =>{

        const getRecipes = async () =>{
            
            const response = await fetch("https://api.punkapi.com/v2/beers");
            const data = await response.json();
            setRecipes(data);

        };
        getRecipes();

    }, []);

    return(

        <div>

            <Navbar 
                hamburger={hamburger}
                hamburgerEvent={hamburgerEvent}
                scrollUp={scrollUp}
                scrollUpHamburger={scrollUpHamburger}
            />

            <Home />

            <About />

            <History />

            <Recipes 
                recipes={recipes}
            />

        </div>

    );
};

export default App;