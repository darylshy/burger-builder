import React from "react";
import classes from "./OrderButton.module.css";

function OrderButton(props) {
  const handleOrderButtonClick = () => {
    props.handleShowModal();
  };
  return (
    <div className={classes.OrderButtonContainer}>
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={handleOrderButtonClick}
      >
        ORDER NOW
      </button>
    </div>
  );
}

export default OrderButton;
