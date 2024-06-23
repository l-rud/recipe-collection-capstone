import { useState, useEffect, process } from "react";
import { Link } from "react-router-dom";
import CategoriesDisplay from "./CategoriesDisplay";

function HomePage() {
    const [categories, setCategories] = useState(null);

    const getCategories = async (searchTerm) => {
        fetch(import.meta.env.VITE_apiBaseUrl + "/categories")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setCategories(data)
            });
    };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            <CategoriesDisplay categories={categories} />
        </div>
    );
}

export default HomePage;