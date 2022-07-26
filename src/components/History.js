import React from "react";
import "./History.css";
import beerCheers from "../images/beer-cheers.jpg";
import beerDrinker from "../images/beer-drinker.jpg";
import beerTap from "../images/beer-tap.jpg";

const History = () =>{
    return(

        <div className="history">

            <p className="title-history">The Beer History</p>

            <div className="inline-history-one">

                <p className="info-history-one">
                    Beer is one of the world's oldest prepared alcoholic drinks. 
                    The earliest archaeological evidence of fermentation consists of 13,000-year-old residues of a beer with the consistency of gruel, used by the semi-nomadic Natufians for ritual feasting, at the Raqefet Cave in the Carmel Mountains near Haifa in Israel.
                </p>

                <img src={beerCheers} className="image-beer-cheers" alt="" />

            </div>

            <div className="inline-history-two">

                <p className="info-history-two">
                    Beer was spread through Europe by Germanic and Celtic tribes as far back as 3000 BC, and it was mainly brewed on a domestic scale. 
                    The product that the early Europeans drank might not be recognized as beer by most people today. 
                    Alongside the basic starch source, the early European beers may have contained fruits, honey, numerous types of plants, spices, and other substances such as narcotic herbs. 
                    What they did not contain was hops, as that was a later addition, first mentioned in Europe around 822 by a Carolingian Abbot and again in 1067 by Abbess Hildegard of Bingen.
                </p>

                <img src={beerDrinker} className="image-beer-drinker" alt="" />

            </div>

            <div className="inline-history-three">

                <p className="info-history-three">
                    In 1912, brown bottles began to be used by Joseph Schlitz Brewing Company of Milwaukee, Wisconsin in the United States. 
                    This innovation has since been accepted worldwide and prevents harmful rays from destroying the quality and stability of beer.
                    <br /><br />
                    As of 2007, the brewing industry is a global business, consisting of several dominant multinational companies and many thousands of smaller producers ranging from brewpubs to regional breweries. 
                    As of 2006, more than 133 billion litres (35 billion US gallons), the equivalent of a cube 510 metres on a side, of beer are sold per year, producing total global revenues of US$294.5 billion. 
                    In 2010, China's beer consumption hit 450 million hectolitres (45 billion litres), or nearly twice that of the United States, but only 5 per cent sold were premium draught beers, compared with 50 per cent in France and Germany.
                </p>

                <img src={beerTap} className="image-beer-tap" alt="" />

            </div>

        </div>

    );
};

export default History;