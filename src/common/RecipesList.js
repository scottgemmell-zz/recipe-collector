import React from 'react';
import RecipesThumb from "./RecipesThumb";

function RecipesList({ list, handleRemove }) {

	return (
		<ul className="list">
			{list.map((item, idx) => <RecipesThumb key={idx} {...item} handleRemove={handleRemove} />)}
		</ul>
	);
}

export default RecipesList;
