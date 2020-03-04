import React from 'react';
import RecipesThumb from "./RecipesThumb";

function RecipesList({ myFavourites, list, handleAdd, handleRemove }) {
	return (
		<ul className="list">
			{list.map((item, idx) => (<RecipesThumb 
				key={idx} 
				{...item} 
				isFav={myFavourites.includes(+item.idMeal)}
				handleAdd={handleAdd} 
				handleRemove={handleRemove} 
			/>)
			)}
		</ul>
	);
}

export default RecipesList;
