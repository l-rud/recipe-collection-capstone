export default function CategoriesDisplay({ categories }) {

    // Function to return loaded JSX
    const loaded = () => {
        const categoriesList = [];

        categories.forEach((category, index) => {
            categoriesList.push(<li key={index}>{category}</li>);
        });

        return (
            <>
                <div>
                    <h2>Categories</h2>
                    <ul>{categoriesList}</ul>
                </div>
            </>
        );
    };

    // Function to return loading JSX
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // Ternary operator will determine which functions JSX we will return
    return categories ? loaded() : loading();
}