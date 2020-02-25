import React from 'react';
import { Link } from "react-router-dom";

// { title, image }
function RecipesItem({ idMeal, strMealThumb, strMeal }) {
  return (
    <React.Fragment>
		<li className="thumb">
			<img 
				className="thumb__img" 
				src={strMealThumb} 
				// width={140} 
				// height={90} 
				alt={strMeal} 
			/> <span className="thumb__meta"><Link to={`/item/${idMeal}/`}>{strMeal}</Link></span>
		</li>
	</React.Fragment>
  );
}

export default RecipesItem;
