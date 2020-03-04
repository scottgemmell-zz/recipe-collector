import React from 'react';
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// { title, image }
function RecipesItem({ idMeal, isFav, strMealThumb, strMeal, handleFavourite }) {
  return (
    <React.Fragment>
		<li className="thumb">
			<img 
				className="thumb__img" 
				src={strMealThumb} 
				width={240} 
				height={240} 
				alt={strMeal} 
			/> 
			<span className="thumb__meta">
				<Link className="thumb__title" to={`/item/${idMeal}/`}>
					{strMeal}
				</Link> 
				<button className="thumb__toggle" onClick={() => handleFavourite({ idMeal })}>
  					{isFav ? <FaHeart /> : <FaRegHeart />} 
					  <span className="u-visually-hidden">
					  {isFav ? "Add to" : "Remove from"} favourites
					  </span>
				</button> 
			</span>
		</li>
	</React.Fragment>
  );
}

export default RecipesItem;
