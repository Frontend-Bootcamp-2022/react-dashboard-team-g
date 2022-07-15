import React, { useState } from "react";
import {
  MessageIcon,
  NotificationIcon,
  NotificationIconRed,
  SettingsIcon,
} from "../../assets/icons/Icon";

const NotificationBar = ({ styles }) => {
  const [notificationStatus, setNotificationStatus] = useState(false);

  const NotificationIcons = () => {
    return notificationStatus ? (
      <NotificationIconRed
        fill="#717986"
        onClickAction={() => setNotificationStatus(false)}
      />
    ) : (
      <NotificationIcon
        fill="#8B8B8B"
        onClickAction={() => setNotificationStatus(true)}
      />
    );
  };

  return (
    <div className={styles.notification}>
      <MessageIcon fill="#717986" />
      <NotificationIcons />
      <SettingsIcon fill="#717986" />
    </div>
  );
};

export default NotificationBar;
