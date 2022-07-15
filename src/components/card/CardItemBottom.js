import { PlusIcon } from "../../assets/icons/Icon";

export const Member = ({ picture }) => {
  return <img src={picture.src} alt={picture.alt} />;
};

export const MembersBar = ({ styles, members }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Members</div>
      <div className={styles.images}>
        <div className={styles.profiles}>
          {members.map((member, index) => (
            <Member
              key={member.url + member.alt + index}
              picture={{ src: member.src, alt: member.alt }}
            />
          ))}
        </div>
        <div className={styles.plus}>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export const Progress = ({ styles, progress }) => {
  return (
    <div className={styles.progress__bar}>
      <div className={styles.color} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export const ProgressBar = ({ styles, progress }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.progress__title}>
        <span>Progress</span>
      </div>
      <div className={styles.progress__percent}>
        <span>{progress}%</span>
      </div>
      <Progress styles={styles} progress={progress} />
    </div>
  );
};

const CardItemBottom = ({ styles, members, progress }) => {
  return (
    <div className={styles.card__bottom}>
      <MembersBar styles={styles} members={members} />
      <ProgressBar styles={styles} progress={progress} />
    </div>
  );
};

export default CardItemBottom;
