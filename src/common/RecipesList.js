import React from 'react';
import RecipesThumb from "./RecipesThumb";

function RecipesList({ myFavourites, list, handleFavourite, isLoading }) {
	return (
		<ul className="list">
			{list.map((item, idx) => (<RecipesThumb 
				key={idx} 
				{...item} 
				isFav={myFavourites.includes(+item.idMeal)}
				handleFavourite={handleFavourite} 
				isLoading={isLoading}
			/>)
			)}
		</ul>
	);
}

export default RecipesList;
