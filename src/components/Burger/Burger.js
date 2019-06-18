import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function Burger(props) {
  const getIngredients = () => {
    const ingredients = [];
    for (let ingredient in props.ingredients) {
      for (let i = 0; i < props.ingredients[ingredient]; i++) {
        ingredients.push(
          <BurgerIngredient type={ingredient} key={ingredient + i} />
        );
      }
    }
    return ingredients;
  };
  const ingredients = getIngredients();
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients.length > 0 ? (
        ingredients
      ) : (
        <div>Please Select Ingredients</div>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
