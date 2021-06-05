import "./App.css";
import {Route, BrowserRouter, Switch} from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home/Home";
import GetQuote from "./Components/Pages/GetQuote/GetQuote";

//add exact before path
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/testing" component={GetQuote} />
    </div>
  );
}

export default App;
