import React from "react";
import {
  MessageIcon,
  NotificationIcon,
  NotificationIconRed,
  SettingsIcon,
} from "../../assets/icons/Icon";

const NotificationBar = ({ style }) => {
  return (
    <div className={style.notification}>
      <MessageIcon fill="#717986" />
      <NotificationIconRed fill="#717986" />
      {/* <NotificationIcon fill="#8B8B8B" /> */}
      <SettingsIcon fill="#717986" />
    </div>
  );
};

export default NotificationBar;
