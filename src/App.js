import Weather from "./Weather.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return(
    <div className="App">
      <Weather defaultCity="Pretoria" />
      <footer>
        <a href="">Open-source code</a> by Nthabiseng Monageng
      </footer>
    </div>
  );
}

export default App;