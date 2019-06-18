import React from "react";
import classes from "./OrderSummary.module.css";
import { upperFirst } from "../../../helpers";
import { INGREDIENTS_PRICES, INGREDIENTS } from "../../../constants";
import { toDollars } from "../../../templates";

const OrderSummary = props => {
  const getIngredients = () => {
    let index = 0;
    const ingredients = [];
    for (let ing in props.ingredients) {
      const ingredientName = upperFirst(ing);
      const ingredientQty =
        ing === INGREDIENTS.MEAT && props.ingredients[ing] > 0
          ? props.ingredients[ing] - 1
          : props.ingredients[ing];
      const costForIngredient =
        INGREDIENTS_PRICES[ing.toUpperCase()] * ingredientQty;
      ingredients.push(
        <tr key={ing + index}>
          <td>{ingredientName}</td>
          <td>{ingredientQty}</td>
          <td>{toDollars`${costForIngredient}`}</td>
        </tr>
      );
      index++;
    }
    return ingredients;
  };
  const getTax = () => props.subtotal * (props.tax / 100);
  const getGrandTotal = () => props.subtotal + getTax();
  return (
    <div className={classes.OrderSummary}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Your Order</h3>
        <h3>Base Price: $4.00</h3>
      </div>
      <hr />
      <p>A delicious burder with the following add-ons:</p>
      <table>
        <tbody>
          <tr>
            <th>Extra</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {getIngredients()}
        </tbody>
      </table>
      <hr />
      <table className={classes.OrderTotal}>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>{toDollars`${props.subtotal}`}</td>
          </tr>
          <tr>
            <td>Tax ({props.tax}%)</td>
            <td>{toDollars`${getTax()}`}</td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td>{toDollars`${getGrandTotal()}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;
