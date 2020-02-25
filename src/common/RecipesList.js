import React from 'react';
import RecipesItem from "./RecipesItem";

function RecipesList({ list }) {
  return (
    <div>
		<ul className="list">
			{list.map((item, idx) => <RecipesItem key={idx} {...item} />)}
		</ul>
    </div>
  );
}

export default RecipesList;
