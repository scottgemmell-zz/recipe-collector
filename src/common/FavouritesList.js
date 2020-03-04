import React from 'react';
import FavouritesThumb from "./FavouritesThumb";

const FavouritesList = ({ handleFavourite, isLoading, list, myFavourites }) => {
	return (
		<ul className="list">
			{list.map((item, idx) => (<FavouritesThumb 
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
