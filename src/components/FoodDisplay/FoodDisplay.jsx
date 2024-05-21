import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  const filterCategory = (category) => {
    if (category === "All") {
      return food_list;
    } else {
      return food_list.filter((newCat) => newCat.category === category);
    }
  };

  const newCategory = filterCategory(category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {newCategory.map((item, index) => {
          return <FoodItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
