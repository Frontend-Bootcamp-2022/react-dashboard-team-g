import React from "react";
import { SortIcon } from "../../assets/icons/Icon";

const Filter = (props) => {
  const styles = props.styles;
  const { selected, setSelected } = props.value;

  return (
    <div className={styles.filter}>
      <div className={styles.filter__left}>
        <span
          onClick={() => setSelected("")}
          className={selected === "" ? styles.active : ""}
        >
          All
        </span>
        <span
          onClick={() => setSelected(false)}
          className={selected === false ? styles.active : ""}
        >
          Inactive
        </span>
        <span
          onClick={() => setSelected(true)}
          className={selected === true ? styles.active : ""}
        >
          Active
        </span>
        <span
          onClick={() => setSelected("On Hold")}
          className={selected === "On Hold" ? styles.active : ""}
        >
          On Hold
        </span>
        <span
          onClick={() => setSelected("Completed")}
          className={selected === "Completed" ? styles.active : ""}
        >
          Completed
        </span>
      </div>
      <div className={styles.filter__right}>
        <span>Default</span>
        <SortIcon fill={"#8b8b8b"} />
      </div>
    </div>
  );
};

export default Filter;
