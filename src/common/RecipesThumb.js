import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Spinner } from "../common";

const RecipesThumb = ({ idMeal, isFav, isLoading, strMealThumb, strMeal, handleFavourite }) => {

  return (
    <React.Fragment>
		{isLoading 
			? <Spinner /> 
			: <li className="thumb">
				<div className="thumb__meta">
					<Link 
						className="thumb__title" 
						to={`/recipe/${idMeal}/`}
					>
						{strMeal}
					</Link> 
					<button 
						className="thumb__toggle" 
						onClick={() => handleFavourite({ idMeal })}
					>
						{isFav 
							? <Fragment>
								<FaHeart /> <span className="u-visually-hidden">Add to favourites</span>
							</Fragment> 
							: <Fragment>
								<FaRegHeart /> <span className="u-visually-hidden">Remove from favourites</span>
							</Fragment>} 
					</button> 
				</div>
				<img 
					className="thumb__img" 
					src={strMealThumb} 
					width={240} 
					height={240} 
					alt={strMeal} 
				/> 
			</li>}
	</React.Fragment>
  );
}

export default RecipesThumb;
