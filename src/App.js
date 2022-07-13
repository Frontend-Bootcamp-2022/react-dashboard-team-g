import HeaderTop from "./components/Header/HeaderTop";
import CardTableCSS from "./components/card/Card.module.css";
import CardTable from "./components/card/Card";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <HeaderTop />
      <div className={CardTableCSS.table}>
        <CardTable />
      </div>
    </div>
  );
};

export default App;
