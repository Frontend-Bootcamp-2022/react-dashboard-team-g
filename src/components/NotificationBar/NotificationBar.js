import React, { useState } from "react";
import {
  MessageIcon,
  NotificationIcon,
  NotificationIconRed,
  SettingsIcon,
} from "../../assets/icons/Icon";

const NotificationBar = ({ style }) => {
  const [notificationStatus, setNotificationStatus] = useState(false);

  const NotificationIcons = () => {
    return notificationStatus ? (
      <NotificationIconRed fill="#717986" />
    ) : (
      <NotificationIcon fill="#8B8B8B" />
    );
  };

  return (
    <div className={style.notification}>
      <MessageIcon fill="#717986" />
      <NotificationIcons />
      <SettingsIcon fill="#717986" />
    </div>
  );
};

export default NotificationBar;
