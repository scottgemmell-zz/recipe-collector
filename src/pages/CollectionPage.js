import React, { useEffect, useState } from "react";
import RecipesList from "../common/RecipesList";

const CollectionPage = () => {

	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
		// data
		//fetch("https://api.spoonacular.com/recipes/informationBulk?ids=716367,715568&apiKey=91b3e1d90c3745ed8f818cef3f0f4070")
			.then(res => res.json())
			.then(data => {
				setRecipeResource(data.meals);
				setIsLoading(false);
			})
			.catch(err => console.log(err));
		// return () => {
		// 	cleanup
		// };
	}, []);

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
