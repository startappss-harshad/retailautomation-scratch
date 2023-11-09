import "./App.css";
// import Ordersummery from './components/sidebar/Order Summery/Ordersummery';
import ButtonAppBar from "./components/sidebar/Order Summery/navbar";

import AppBarr from "./components/Price List/navbar";
import PriceList from "./components/Price List/priceList";

function App() {
  return (
    <div className="App">
      {/* <Sidebar/> */}
      {/* <Ordersummery/> */}
      <AppBarr />
      <PriceList />
    </div>
  );
}

export default App;
