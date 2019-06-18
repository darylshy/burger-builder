import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Buttons from "../Buttons/Buttons";

function Modal(props) {
  return (
    <Fragment>
      {props.showModal ? (
        <Backdrop handleDismissModal={props.handleDismissModal} />
      ) : null}
      <div
        className={classes.Modal}
        style={{
          transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.showModal ? 1 : 0
        }}
      >
        {props.children}
        <Buttons
          disabled={!props.purchaseable}
          handleClick={props.handleDismissModal}
          // btnType="Danger"
        >
          Cancel
        </Buttons>
      </div>
    </Fragment>
  );
}

export default Modal;
