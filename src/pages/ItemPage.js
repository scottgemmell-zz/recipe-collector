import React, { useEffect, useState } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectFavourites, toggleFavourite } from "../features/favourites/favouritesSlice";
import { RecipesList, Spinner } from "../common/";

const fetchByMealId = mealId => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
	.then(res => res.json())
	.then(data => { 
		return data.meals[0]
	});

const fetchFavouriteMeals = meals => meals.map(mealId => fetchByMealId(mealId));

const ItemPage = () => {

	const myFavourites = useSelector(selectFavourites);
	const dispatch = useDispatch();
	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let { mealId } = useParams();

	useEffect(() => {
		//console.log("STARTUP");
		Promise
		.all(fetchFavouriteMeals([+mealId]))
		.then(data => {
			//console.log("DATA", data)
			setRecipeResource(data);
			//setIsLoading(false)
		})
	}, [myFavourites]);

	const handleFavourite = e => {
		//console.log("handleFavourite", e);
		dispatch(toggleFavourite(e.idMeal));
	}

	//console.log('recipeResource', recipeResource[0].idMeal)

	const isFav = recipeResource[0] && myFavourites.includes(+recipeResource[0].idMeal);

	return (
		<div className="App-main">
			<div className="App-inner">
				{recipeResource[0] && <div className="item">
					<div className="item__meta">
						<h1>
							{recipeResource[0].strMeal}
						</h1>
						<dl>
							<dt>
								Description
							</dt>
							<dd>
								{recipeResource[0].strInstructions}
							</dd>
							<dt>
								Area
							</dt>
							<dd>
								{recipeResource[0].strArea}
							</dd>
							<dt>
								Category
							</dt>
							<dd>
								{recipeResource[0].strCategory}
							</dd>
							<dt>
								Tags
							</dt>
							<dd>
								{recipeResource[0].strTags}
							</dd>
						</dl>
					</div>
					<div className="item__thumb">
						<img src={recipeResource[0].strMealThumb} height={300} width={300} alt=""/>
						<p>
							<button onClick={() => handleFavourite({ idMeal: +recipeResource[0].idMeal })}>{!isFav ? " Add to" : " Remove from"} favourites </button>
						</p>
					</div>
				</div>}
			</div>
		</div>
	);
}

export default ItemPage;
