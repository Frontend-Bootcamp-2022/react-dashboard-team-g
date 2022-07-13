import HeaderTop from "./components/Header/HeaderTop";
import CardTableCSS from "./components/card/Card.module.css";
import CardTable from "./components/card/Card";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <HeaderTop />
      <div className={CardTableCSS.table}>
        <CardTable />
      </div>
    </div>
  );
};

export default App;
