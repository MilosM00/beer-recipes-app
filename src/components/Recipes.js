import React from "react";
import "./Recipes.css";

const Recipes = ({recipes}) =>{

    // console.log(recipes[0]);

    const [number, setNumber] = React.useState(0);

    const next = () =>{
        if(number < 24)
        {
            setNumber(number + 1);
        }

        else
        {
            setNumber(0);
        }
        
    };

    const previous = () =>{

        if(number === 0)
        {
            setNumber(24);
        }
        
        else
        {
            setNumber(number - 1);
        }
    };

    return(

        <div className="recipes">

            <p className="title-recipes">The Beer Recipes</p>

            <div className="inline-recipes">

                <div>
                    <p className="name-recipes">{recipes[number]?.name}</p>
                    <p className="tagline-recipes">{recipes[number]?.tagline}</p>
                    <p className="description-recipes">{recipes[number]?.description}</p>
                    <p>It goes great with: <br /> {recipes[number]?.food_pairing}</p>
                </div>

                <img src={recipes[number]?.image_url} alt="" className="image-recipes" />
                
            </div>

            <div className="inline-recipes-two">
                <button className="button-arrow" onClick={previous}><i className="fa fa-arrow-left"></i></button>
                <button className="button-arrow" onClick={next}><i className="fa fa-arrow-right"></i></button>
            </div>  
            
            <p className="display-number">{number + 1}/25</p>

        </div>

    );
};

export default Recipes;