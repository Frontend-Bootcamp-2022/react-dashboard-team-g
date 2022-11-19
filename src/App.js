import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Sidebar from "./components/Sidebar/Sidebar";

import styles from "./components/Card/card.module.scss";
import "./App.scss";

const App = () => {
  const [projectData, setProjectData] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const value = { search, selected, setSearch, setSelected };

  const fetchData = async () => {
    const result = await axios(
      "https://private-e6514c-projectsinfo.apiary-mock.com/getProjects"
    );
    setProjectData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div className="wrapper__left">
        <Sidebar />
      </div>
      <div className="wrapper__right">
        <Header value={value} />
        <div className={styles.table}>
          <Card styles={styles} value={value} data={projectData} />
        </div>
      </div>
    </div>
  );
};

export default App;
