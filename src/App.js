import CardTableCSS from "./components/card/Card.module.css";

import CardTable from "./components/card/Card";



const App = () => {
   return (
    <div className={CardTableCSS.table}>
      <CardTable />
    </div>
   )
}

export default App;
