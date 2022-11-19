import { useState } from "react";

import ProjectTop from "./CardItemTop";
import ProjectMid from "./CardItemMiddle";
import ProjectBottom from "./CardItemBottom";

const Card = ({ styles, data, value }) => {
  const { search, selected } = value;

  const projectData = data
    .filter(
      (project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .filter(
      (project) =>
        project.status?.includes(selected) || project.activity === selected
    );

  const hasProject = projectData.length ? (
    projectData.map((project) => {
      return (
        <div key={project.id} className={styles.table__item}>
          <div className={styles.card}>
            <ProjectTop
              styles={styles}
              title={project.name}
              activity={project.activity}
            />
            <ProjectMid
              styles={styles}
              date={project.startDate}
              status={project.status}
              number={{ one: 15, two: project.members.length }}
            />
            <ProjectBottom
              styles={styles}
              members={project.members}
              progress={project.progress}
            />
          </div>
        </div>
      );
    })
  ) : (
    <div className={styles.loading}>NO PROJECTS FOUND</div>
  );

  const Wrapper = data.length ? (
    hasProject
  ) : (
    <div className={styles.loading}>LOADING...</div>
  );

  return Wrapper;
};

export default Card;
