import React from "react";
import classes from "./BuildControls.module.css";
import { INGREDIENTS } from "../../../constants";
import { upperFirst } from "../../../helpers";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: upperFirst(INGREDIENTS.MEAT), type: INGREDIENTS.MEAT },
  { label: upperFirst(INGREDIENTS.BACON), type: INGREDIENTS.BACON },
  { label: upperFirst(INGREDIENTS.CHEESE), type: INGREDIENTS.CHEESE },
  { label: upperFirst(INGREDIENTS.SALAD), type: INGREDIENTS.SALAD }
];

function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      {controls.map(c => {
        return (
          <BuildControl
            label={c.label}
            type={c.type}
            key={c.label}
            handleAddIngredient={props.handleAddIngredient}
            handleRemoveIngredient={props.handleRemoveIngredient}
            disabled={props.disabled[c.type]}
          />
        );
      })}
    </div>
  );
}

export default BuildControls;
