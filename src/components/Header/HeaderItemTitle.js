import React from "react";

const HeaderItemTitle = (props) => {
  const styles = props.styles;
  return (
    <div className={styles.title}>
      <span>Project</span>
    </div>
  );
};

export default HeaderItemTitle;
