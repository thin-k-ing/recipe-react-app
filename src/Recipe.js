import React from "react";
import style from "./recipe.module.css";

const Recipe = (props) => {
	return (
		<div className={style.recipe}>
			<h1>{props.title}</h1>
			<p>{Math.floor(props.calories)} cals</p>
			<ul>
				{props.ingredients.map((ingredient) => {
					return <li>{ingredient.text}</li>;
				})}
			</ul>
			<img className={style.image} src={props.imgSrc} alt="" />
		</div>
	);
};

export default Recipe;
