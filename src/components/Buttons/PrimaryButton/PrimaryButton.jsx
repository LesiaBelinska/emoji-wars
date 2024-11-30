import React from "react";
import s from "./PrimaryButton.module.css";

const PrimaryButton = ({buttonText}) => {
    return (
      <button type="button" className={s.button}>
        {buttonText}
      </button>
    );
}

export default PrimaryButton;