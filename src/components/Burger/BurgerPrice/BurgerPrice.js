import React from "react";
import PropTypes from "prop-types";
import { getTotal } from "../../../templates";
import classes from "./BurgerPrice.module.css";

function BurgerPrice(props) {
  const grandTotal = getTotal`${props.subtotal}${props.tax}`;
  return (
    <div className={classes.PriceContainer}>
      <p className={classes.Price}>{grandTotal}</p>
    </div>
  );
}

BurgerPrice.propTypes = {
  tax: PropTypes.number.isRequired
};

export default BurgerPrice;
