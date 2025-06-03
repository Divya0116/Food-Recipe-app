import React from "react";
import { NavLink } from "react-router-dom";

const Mealcard = ({ detail }) => {
  console.log(detail);
  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((curItem) => {
            return (
              <div className="mealImg" key={curItem.idMeal}>
                <img src={curItem.strMealThumb} alt={curItem.strMeal}></img>
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
      {!detail && <p className="msg">Search for a meal!</p>}
    </div>
  );
};

export default Mealcard;
