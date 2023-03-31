import React from "react";
import ReactDOM from "react-dom";

import classes from "./WelcomeModal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = () => {
  return (
    <div className={classes.modalContainer}>
      <header>
        <h2>Welcome to your new to-do list app!</h2>
      </header>
      <div>
        <p className={classes.modalMessage}>
          We're excited to help you stay organized and on top of your tasks.
          With our app, you can easily create, manage, and prioritize your to do
          list so you can focus on what's important. To get started, could you
          tell us your name?
        </p>
      </div>
      <form>
        <input type="text" className={classes.usernameInput}></input>
        <button className={classes.proceedBtn}>Proceed</button>
      </form>
    </div>
  );
};

const WelcomeModal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal></Modal>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default WelcomeModal;
