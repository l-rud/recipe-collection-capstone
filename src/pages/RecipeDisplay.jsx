export default function RecipeDisplay({ recipe }) {
    
const loaded = () => {
        const ingredientsList = [];
        const linksList = [];

        recipe.ingredients.forEach((ingredient, index) => {
            ingredientsList.push(<li key={index}>{ingredient}</li>);
        });

        recipe.links.forEach((link, index) => {
            linksList.push(<div key={index}><a target="_blank" href={link}>View Image {index + 1}</a></div>);
        });

        return (
            <>
                <div className="recipe-details">
                    <h2>{recipe.title}</h2>
                    <h3>Directions</h3>
                    <p>{recipe.directions}</p>
                    <h3>Ingredients</h3>
                    <ul>{ingredientsList}</ul>
                    <h3>Images</h3>
                    {linksList}
                </div>
            </>
        );
    };

    // Function to return loading JSX
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // Ternary operator will determine which functions JSX we will return
    return recipe ? loaded() : loading();
}