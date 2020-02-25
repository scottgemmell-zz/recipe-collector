import React from 'react';
import RecipesThumb from "./RecipesThumb";

function RecipesList({ list }) {

	return (
		<ul className="list">
			{list.map((item, idx) => <RecipesThumb key={idx} {...item} />)}
		</ul>
	);
}

export default RecipesList;
