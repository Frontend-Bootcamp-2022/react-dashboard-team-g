import React from "react";
import profile from "../../assets/image/profile.png";

const Profile = ({ styles }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__left}>
        <img src={profile} alt={"profile pict"} />
      </div>
      <div className={styles.profile__right}>
        <span>Hilal {"&"} Güney</span>
        <a href="mailto:asfakmahmudbd@gmail.com">asfakmahmudbd@gmail.com</a>
      </div>
    </div>
  );
};

export default Profile;
