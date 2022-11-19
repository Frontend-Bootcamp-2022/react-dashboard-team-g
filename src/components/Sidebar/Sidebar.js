import Box from "./Box";

import {
  CollapseIcon,
  DashboardIcon,
  LogOutIcon,
  MembersIcon,
  ModulesIcon,
  PageLogo,
  ProjectsIcon,
  ReportsIcon,
  SprintIcon,
} from "../../assets/icons/Icon";

import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const sideBarTitle = {
    title: "ChirKuut",
    logoCircile: <PageLogo />,
    collapse: <CollapseIcon />,
  };
  const sideBarItemCenter = [
    {
      id: 1,
      name: "Dashboard",
      svg: <DashboardIcon />,
    },
    {
      id: 2,
      name: "Projects",
      svg: <ProjectsIcon />,
    },
    {
      id: 3,
      name: "Modules",
      svg: <ModulesIcon />,
    },
    {
      id: 4,
      name: "Sprint",
      svg: <SprintIcon />,
    },
    {
      id: 5,
      name: "Members",
      svg: <MembersIcon />,
    },
    {
      id: 6,
      name: "Reports",
      svg: <ReportsIcon />,
    },
  ];

  const sideBarItemBottom = {
    name: "Log out",
    svg: <LogOutIcon />,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__top}>
        <div className={styles.logo}>{sideBarTitle.logoCircile}</div>
        <div className={styles.title}>{sideBarTitle.title}</div>
        <div className={styles.collapse}>{sideBarTitle.collapse}</div>
      </div>

      <div className={styles.wrapper__bottom}>
        <div className={styles.box}>
          {sideBarItemCenter.map((item) => (
            <Box
              key={item.id}
              name={item.name}
              svg={item.svg}
              styles={styles}
            />
          ))}
        </div>
        <div className={styles.logout}>
          {sideBarItemBottom.img}
          {sideBarItemBottom.name}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
