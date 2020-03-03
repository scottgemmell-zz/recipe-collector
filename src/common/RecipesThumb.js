import React from 'react';
import { Link } from "react-router-dom";

// { title, image }
function RecipesItem({ idMeal, handleAdd, handleRemove, strMealThumb, strMeal }) {
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
			<br/>
			<span onClick={() => handleAdd({ addId: idMeal })}>Add</span>
			<span onClick={() => handleRemove({ removeId: idMeal })}>Remove</span>
		</li>
	</React.Fragment>
  );
}

export default RecipesItem;
