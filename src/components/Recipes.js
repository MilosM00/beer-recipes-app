import React from "react";
import "./Recipes.css";

const Recipes = ({recipes}) =>{

    console.log(recipes[2]);

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

        <>
            <section id="recipes">

                <div className="recipes">

                    <p className="title-recipes">The Beer Recipes</p>

                    <div className="inline-recipes-two">
                        <button className="button-arrow" onClick={previous}><i className="fa fa-arrow-left"></i></button>
                        <p className="display-number">{number + 1}/25</p>
                        <button className="button-arrow" onClick={next}><i className="fa fa-arrow-right"></i></button>
                    </div>  

                    <div>
                        <p className="name-recipes">Name: {recipes[number]?.name}</p>
                        <p className="tagline-recipes">Tagline: {recipes[number]?.tagline}</p>
                        <p className="description-recipes">Description: <br />{recipes[number]?.description}</p>
                        <div className="food-pairing-recipes">
                            It goes great with:
                            {
                                recipes[number]?.food_pairing.map((food, id) =>{
                                    return(
                                        <p key={id}><i className="fa fa-caret-right"></i> {food}</p>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="tape-recipes">
                        <div>

                            <p>
                                <span>🍺</span><br/>
                                Beer Recipes
                            </p>

                            <p>
                                <span>🍀</span><br />
                                All Natural
                            </p>

                            <p>
                                <span>💉</span><br />
                                Without Additives
                            </p>

                        </div>
                    </div>

                    <div className="inline-recipes">

                        <div>

                            <p className="preparation-recipes">PREPARATION</p>

                            <p>
                                Boil Volume:
                                <span> {recipes[number]?.boil_volume?.value} </span>
                                <span>{recipes[number]?.boil_volume?.unit}</span>
                            </p>

                            {
                                recipes[number]?.ingredients?.hops.map((hops, id) =>{
                                    
                                    return(
                                        <p key={id}>
                                            <i className="fa fa-caret-right"></i>
                                            <span> Add {hops.amount.value} </span>
                                            <span>{hops.amount.unit}</span>
                                            <span> of {hops.name}</span>
                                            <span> at the {hops.add} of the preparation</span>
                                        </p>
                                    );
                                    
                                })
                            }

                            {
                                recipes[number]?.ingredients?.malt.map((malt, id) =>{
                                    return(
                                        <p key={id}>
                                            <i className="fa fa-caret-right"></i>
                                            <span> Add {malt.amount.value} </span>
                                            <span>{malt.amount.unit}</span>
                                            <span> of the {malt.name}</span>
                                        </p>
                                    );
                                })
                            }

                            {
                                <p>
                                    <i className="fa fa-caret-right"></i> Fermentation Temperature
                                    <span> {recipes[number]?.method?.fermentation?.temp?.value} </span>
                                    <span>{recipes[number]?.method?.fermentation?.temp?.unit}</span>
                                </p>
                            }

                            {
                                <div>
                                    <div> {recipes[number]?.method?.mash_temp.map((mash, id) =>{
                                            return(
                                                
                                                <p key={id}>
                                                    <i className="fa fa-caret-right"></i>
                                                    <span> Liquid mash temperature on {mash.temp.value}</span>
                                                    <span> {mash.temp.unit}</span>
                                                    <span> for {mash.duration == null ? 15 : mash.duration} minutes</span>
                                                </p>

                                            );
                                        })}
                                    </div>
                                </div> 
                            }

                            <p>
                                <i className="fa fa-caret-right"></i> Add yeast: {recipes[number]?.ingredients?.yeast}
                            </p>

                        </div>

                        <img src={recipes[number]?.image_url} alt="" className="image-recipes" />

                    </div>



                </div>
                
            </section>
        </>


    );
};

export default Recipes;