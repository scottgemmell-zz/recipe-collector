import React from 'react';
import RecipesThumb from "./RecipesThumb";

function RecipesList({ list }) {
  return (
    <div>
		<ul className="list">
			{list.map((item, idx) => <RecipesThumb key={idx} {...item} />)}
		</ul>
    </div>
  );
}

export default RecipesList;
