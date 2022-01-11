import React, { useEffect, useState } from "react";
import { uid } from "uid";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
	const [recipes, setRecipes] = useState([]);

	const [searchText, setSearchText] = useState("");

	const [query, setQuery] = useState("chicken");

	const APP_ID = "66649d8c";
	const APP_KEY = "9379a51e04659ce07e1dd4577ae8d217";

	const fetchRecipe = async () => {
		let reqURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
		const response = await fetch(reqURL);
		const data = await response.json();
		console.log(data.hits);
		setRecipes(data.hits);
	};

	const getSearch = (event) => {
		event.preventDefault();
		setQuery(searchText);
		setSearchText("");
	};

	useEffect(() => {
		fetchRecipe();
	}, [query]);

	return (
		<div className="App">
			<form onSubmit={getSearch} action="" className="search-form">
				<input
					type="text"
					className="search-bar"
					value={searchText}
					onChange={(event) => {
						setSearchText(event.target.value);
					}}
				/>
				<button type="submit" className="search-button">
					Search
				</button>
			</form>

			<div className="recipes">
				{recipes.map((recipe) => (
					<Recipe
						key={uid()}
						calories={recipe.recipe.calories}
						imgSrc={recipe.recipe.image}
						title={recipe.recipe.label}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
