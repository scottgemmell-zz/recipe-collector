import React, { useEffect, useState } from "react";
import RecipesList from "../common/RecipesList";

const ListPage = () => {

	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
		// data.recipes
		//fetch("https://api.spoonacular.com/recipes/random?number=20&tags=vegetarian&apiKey=3fcd89c737204c9d9e588415088e7b96")
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
				Random
			</h1>
			
			{isLoading && <div>Loading...</div>}

			{recipeResource && <RecipesList 
				list={recipeResource} 
			/>}
		</div>
    </div>
  );
}

export default ListPage;