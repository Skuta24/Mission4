import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
