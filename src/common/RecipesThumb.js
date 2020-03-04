import React from 'react';
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// { title, image }
function RecipesItem({ idMeal, isFav, handleAdd, handleRemove, strMealThumb, strMeal }) {
  return (
    <React.Fragment>
		<li className="thumb">
			<img 
				className="thumb__img" 
				src={strMealThumb} 
				// width={140} 
				// height={90} 
				alt={strMeal} 
			/> 
			<span className="thumb__meta">
				<Link className="thumb__title" to={`/item/${idMeal}/`}>{strMeal}</Link> 
				<button className="thumb__add" onClick={() => handleAdd({ addId: idMeal })}>
  					{isFav ? <FaHeart /> : <FaRegHeart />} <span className="u-visually-hidden">Add</span>
				</button> 
				{/* <button className="thumb__remove" onClick={() => handleRemove({ removeId: idMeal })}>
					x <span className="u-visually-hidden">Remove</span>
				</button> */}
			</span>
		</li>
	</React.Fragment>
  );
}

export default RecipesItem;
