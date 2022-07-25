import React from "react";
import "./About.css";
import imageBeerBottle from "../images/beer-bottle.jpg";
import imageBeerBarrel from "../images/beer-barrel.jpg";

const About = () =>{
    return(

        <div className="about">

            <p className="title-about">About The Beer</p>
            
            <div className="inline-one-about">

                <p className="info-about">
                    Beer is one of the world's oldest and most widely consumed alcoholic drinks.
                    It is the third most popular drink overall after water and tea.
                    It's produced by the brewing and fermentation of starches, mainly derived from cereal grains, most commonly from malted barley, though wheat, maize, rice, and oats are also used.
                </p>

                <img src={imageBeerBottle} className="image-beer-bottle" alt="" />

            </div>

            <div className="inline-two-about">

                <p className="info-about-two">
                    Beer is distributed in bottles and cans and is also commonly available on draught, particularly in pubs and bars. The brewing industry is a global business, consisting of several dominant multinational companies and many thousands of smaller producers ranging from brewpubs to regional breweries. <br />
                    Beer forms part of the culture of many nations and is associated with social traditions such as beer festivals, as well as a rich pub culture involving activities like pub crawling, pub quizzes, and pub games.
                </p>

                <img src={imageBeerBarrel} className="image-beer-barrel" alt="" />

            </div>

            <div className="fun-fact">
                <p className="fun-fact-title"><span>FUN FACT</span> <i className="fa fa-lightbulb"></i></p>
                <p className="fun-fact-info">When beer is distilled, the resulting liquor is a form of whisky.</p>
            </div>

        </div>

    );
};

export default About;