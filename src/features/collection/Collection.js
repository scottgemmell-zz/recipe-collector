import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
	removeItem,
  	selectCollection,
} from './collectionSlice';
import RecipesList from "../../common/RecipesList";

const fetchByMealId = mealId => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
		.then(res => res.json())
		.then(data => data.meals[0]);

const fetchFavouriteMeals = meals => meals.map(mealId => fetchByMealId(mealId));

const Collection = () => {

	const collection = useSelector(selectCollection);
  	const dispatch = useDispatch();

	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleRemove = (e) => {
		console.log("handleRemove", e);
		dispatch(removeItem(e.removeId));
	}

	useEffect(() => {
		//console.log("STARTUP");
		Promise
		.all(fetchFavouriteMeals(collection))
		.then(data => {
			//console.log("DATA", data)
			setRecipeResource(data);
			setIsLoading(false)
		})
	}, [collection]);

  return (
    <div className="App-main">
		<div className="App-inner">
			<h1>
				My Collection
			</h1>
			
			{isLoading && <div>Loading...</div>}

			{recipeResource && <RecipesList 
				list={recipeResource} 
				handleRemove={handleRemove}
				collection={collection}
			/>}
		</div>
    </div>
  );
}

export default Collection;
