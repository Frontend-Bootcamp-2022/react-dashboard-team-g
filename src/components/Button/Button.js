import React from "react";

const Button = ({ styles }) => {
  return (
    <div className={styles.button}>
      <button type="submit">
        <span>+ </span>
        <span>New</span>
      </button>
    </div>
  );
};

export default Button;
