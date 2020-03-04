import React from 'react';
import RecipesThumb from "./RecipesThumb";

function RecipesList({ collection, list, handleAdd, handleRemove }) {
	return (
		<ul className="list">
			{list.map((item, idx) => (<RecipesThumb 
				key={idx} 
				{...item} 
				isFav={collection.includes(+item.idMeal)}
				handleAdd={handleAdd} 
				handleRemove={handleRemove} 
			/>)
			)}
		</ul>
	);
}

export default RecipesList;
