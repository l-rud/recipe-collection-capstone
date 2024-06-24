import { Link } from "react-router-dom";

//Defining a functional component RecipesByCategoryDisplay that accepts recipes as a prop.
export default function RecipesByCategoryDisplay({ recipes }) {

    // Function to return loaded JSX  when recipes are available

//Iterates over the recipes array which contains objects with a title property.
//Creates a list (<ul>) of recipe titles (<li> elements) based on the title property of each recipe object.
//Returns a structured JSX with a <div>, <h2>, and <ul> containing the list of recipe titles.
    
const loaded = () => {
        const recipesList = [];

        recipes.forEach((recipe, index) => {
            recipesList.push(<li key={index}><Link to={`/recipe?id=${recipe._id}`}>{recipe.title}</Link></li>);
        });

        return (
            <>
                <div className="recipe-details">
                    <h2>Recipes</h2>
                    <ul>{recipesList}</ul>
                </div>
            </>
        );
    };

    // Function to return loading JSX
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // Ternary operator will determine which functions JSX we will return
    return recipes ? loaded() : loading();
}