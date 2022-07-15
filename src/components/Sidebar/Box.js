import React from "react";

const Box = (props) => {
  const { styles } = props;
  return (
    <div className={styles.box__item}>
      {props.svg}
      {props.name}
    </div>
  );
};

export default Box;
