import React from "react";
import classes from "./Backdrop.module.css";
import PropTypes from "prop-types";
function Backdrop(props) {
  return (
    <div onClick={props.handleDismissModal} className={classes.Backdrop} />
  );
}

Backdrop.propTypes = {
  handleDismissModal: PropTypes.func.isRequired
};

export default Backdrop;
