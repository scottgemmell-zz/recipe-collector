import React from 'react';
import RecipesThumb from "./RecipesThumb";

const FavouritesList = ({ handleFavourite, isLoading, list, myFavourites }) => {
	return (
		<ul className="list">
			{list.map((item, idx) => (<RecipesThumb 
				key={idx} 
				{...item} 
				isFav={myFavourites.includes(+item.idMeal)}
				handleFavourite={handleFavourite} 
				//isLoading={true}
			/>)
			)}
		</ul>
	);
}

export default FavouritesList;
