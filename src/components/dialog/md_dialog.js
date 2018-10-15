import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

const md_dialog = () => (
  <Dialog
    className="paper"
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={this.state.open}
    onClose={this.handleClose}
  >
    <div className="paper">
      <div className="title">TITLE HERE</div>
      <ul>
        <li>Amazon.com</li>
        <li>Amazon.co.uk</li>
        <li>Redbubble</li>
        <li />
        <li />
      </ul>
    </div>
  </Dialog>
);

export default md_dialog;
