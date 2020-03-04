import React from 'react';
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Spinner } from "../common";

const FavouritesThumb = ({ idMeal, isFav, isLoading, strMealThumb, strMeal, handleFavourite }) => {

  return (
    <React.Fragment>
		{isLoading 
			&& <Spinner /> 
			|| <li className="thumb">
				<img 
					className="thumb__img" 
					src={strMealThumb} 
					width={240} 
					height={240} 
					alt={strMeal} 
				/> 
				<span className="thumb__meta">
					Fav: <Link className="thumb__title" to={`/item/${idMeal}/`}>
						{strMeal}
					</Link> 
					<button className="thumb__toggle" onClick={() => handleFavourite({ idMeal })}>
						{isFav ? <FaHeart /> : <FaRegHeart />} 
						<span className="u-visually-hidden">
						{isFav ? "Add to" : "Remove from"} favourites
						</span>
					</button> 
				</span>
			</li>}
	</React.Fragment>
  );
}

export default FavouritesThumb;