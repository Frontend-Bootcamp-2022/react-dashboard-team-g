import { DotIcon, EditIcon, PencilIcon } from "../../assets/icons/Icon";

export const Title = ({ title, styles }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  );
};

export const Icons = ({ styles }) => {
  return (
    <div className={styles.icons}>
      <PencilIcon />
      <EditIcon />
    </div>
  );
};

export const Activity = ({ styles, activity }) => {
  let color;
  let status;
  switch (activity) {
    case true:
      color = "#00DB99";
      status = "Active";
      break;
    case false:
      color = "#FF285C";
      status = "Inactive";
      break;
    default:
      break;
  }

  return (
    <div className={styles.activity}>
      <DotIcon fill={color} />
      <span style={{ color: `${color}` }}>{status}</span>
    </div>
  );
};

const CardItemTop = ({ title, styles, activity }) => {
  return (
    <div className={styles.card__header}>
      <Title title={title} styles={styles} />
      <Icons styles={styles} />
      <Activity styles={styles} activity={activity} />
    </div>
  );
};

export default CardItemTop;
