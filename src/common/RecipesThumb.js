import React from 'react';
import { Link } from "react-router-dom";

function RecipesItem({ id, image, title }) {
  return (
    <React.Fragment>
		<li className="thumb">
			<img 
				className="thumb__img" 
				src={image} 
				// width={140} 
				// height={90} 
				alt={title} 
			/> <span className="thumb__meta"><Link to={`/item/${id}/`}>{title}</Link></span>
		</li>
	</React.Fragment>
  );
}

export default RecipesItem;
