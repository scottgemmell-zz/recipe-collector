import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
	toggleFavourite,
  	selectFavourites,
} from './favouritesSlice';
import RecipesList from "../../common/RecipesList";
import Spinner from "../../common/Spinner";

const fetchByMealId = mealId => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
		.then(res => res.json())
		.then(data => { 
			return data.meals[0]
		});

const fetchFavouriteMeals = meals => meals.map(mealId => fetchByMealId(mealId));

const Favourites = () => {

	const myFavourites = useSelector(selectFavourites);
  	const dispatch = useDispatch();
	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		//console.log("STARTUP");
		Promise
		.all(fetchFavouriteMeals(myFavourites))
		.then(data => {
			//console.log("DATA", data)
			setRecipeResource(data);
			setIsLoading(false)
		})
	}, [myFavourites]);

	const handleFavourite = e => {
		//console.log("handleFavourite", e);
		dispatch(toggleFavourite(e.idMeal));
	}

  return (
    <div className="App-main">
		<div className="App-inner">
			<h1>
				My Favourites
			</h1>
			
			{isLoading && <Spinner />}

			{recipeResource && <RecipesList 
				list={recipeResource} 
				handleFavourite={handleFavourite}
				myFavourites={myFavourites}
			/>}
		</div>
    </div>
  );
}

export default Favourites;
