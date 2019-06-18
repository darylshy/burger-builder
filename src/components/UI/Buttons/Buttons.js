import React from "react";
import PropTypes from "prop-types";
import classes from "./Buttons.module.css";

const Buttons = props => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

Buttons.propType = {
  btnType: PropTypes.oneOf(["Danger", "Success", "Default"]).isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

Buttons.defaultProps = {
  btnType: "Default"
};

export default Buttons;
