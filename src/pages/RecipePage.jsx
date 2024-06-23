import { useState, useEffect, process } from "react";
import { Link } from "react-router-dom";
import RecipeDisplay from "./RecipeDisplay";

//Defining a functional component RecipesByCategoryPage.
function RecipePage() {
    const [recipe, setRecipe] = useState(null); 

    const getRecipe = async (searchTerm) => {
        const queryParameters = new URLSearchParams(window.location.search);
        const id = queryParameters.get("id");

        fetch(import.meta.env.VITE_apiBaseUrl + "/recipes/" + id)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setRecipe(data) 
            });
    };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
        getRecipe();
    }, []);

    return (
        <div>
            <RecipeDisplay recipe={recipe} />
        </div>
    );
}

export default RecipePage;