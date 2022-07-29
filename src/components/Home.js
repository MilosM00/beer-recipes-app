import React from "react";
import "./Home.css";

const Home = () =>{
    return(

        <div className="home">
            <div className="home-overlay">

                <p className="title-home">Welcome Beer Drinker!</p>

                <p className="info-home">
                    Find out about the best recipes for beers!
                </p>

                <p className="info-home">
                    Learn about beer and beer history!
                </p>

                <div className="inline-home">
                    <a href="#about">Learn More</a>
                    <a href="#recipes">Beer Recipes</a>
                </div>

            </div>
        </div>

    );
};

export default Home;