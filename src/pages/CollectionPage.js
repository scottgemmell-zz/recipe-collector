import React, { useEffect, useState } from "react";
import RecipesList from "../common/RecipesList";

const CollectionPage = () => {

	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [initialState] = useState([52772, 52773, 52774]);

	useEffect(() => {
		//console.log("STARTUP");
		const fetchFavourites = initialState.map(mealId => {
			return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
			.then(res => res.json())
			.then(data => data.meals[0])
		});
		Promise.all(fetchFavourites)
		.then(data => {
			setRecipeResource(data);
			setIsLoading(false)
		})
	}, [initialState]);

  return (
    <div className="App-main">
		<div className="App-inner">
			<h1>
				My Collection
			</h1>
			
			{isLoading && <div>Loading...</div>}

			{recipeResource && <RecipesList 
				list={recipeResource} 
			/>}
		</div>
    </div>
  );
}

export default CollectionPage;
