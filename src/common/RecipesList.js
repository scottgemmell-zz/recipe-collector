import React from 'react';
import RecipesThumb from "./RecipesThumb";

function RecipesList({ list, handleAdd, handleRemove }) {

	return (
		<ul className="list">
			{list.map((item, idx) => <RecipesThumb 
				key={idx} 
				{...item} 
				handleAdd={handleAdd} 
				handleRemove={handleRemove} 
			/>)}
		</ul>
	);
}

export default RecipesList;
