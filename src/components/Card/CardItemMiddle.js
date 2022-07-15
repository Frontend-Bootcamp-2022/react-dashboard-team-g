import React from "react";
import { DotIcon, LineIcon } from "../../assets/icons/Icon";

export const Date = ({ styles, date }) => {
  return (
    <div className={styles.date}>
      <span>Start Date</span>
      <span>{date}</span>
    </div>
  );
};

export const Status = (props) => {
  const styles = props.styles;
  let color;
  let status;
  switch (props.status) {
    case "Completed":
      color = "#45DB99";
      status = "Completed";
      break;

    case "On Hold":
      color = "#F0BB00";
      status = "On hold";
      break;
    default:
      break;
  }

  return (
    <div className={styles.status}>
      <DotIcon fill={color} />
      <span style={{ color: `${color}` }}>{status}</span>
    </div>
  );
};

const Signal = ({ styles, number, name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

const CardItemMiddle = ({ styles, status, date, number }) => {
  return (
    <div className={styles.card__mid}>
      <Date styles={styles} date={date} />
      <Status styles={styles} status={status} />
      <div className={styles.buttons}>
        <Signal styles={styles} number={number.one} name={"Tasks"} />
        <LineIcon />
        <Signal styles={styles} number={number.two} name={"Users"} />
      </div>
    </div>
  );
};

export default CardItemMiddle;
