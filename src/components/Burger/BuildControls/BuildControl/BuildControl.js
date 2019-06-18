import React from "react";
import classes from "./BuildControl.module.css";

export default React.memo(function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.handleRemoveIngredient}
        data-type={props.type}
        disabled={props.disabled}
      >
        Less
      </button>
      <button
        className={classes.More}
        onClick={props.handleAddIngredient}
        data-type={props.type}
      >
        More
      </button>
    </div>
  );
});
