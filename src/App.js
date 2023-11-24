import Weather from "./Weather";
import "./App.css";


 export default function App() {
  return(
    <div className="App">
      <div fluid="sm" className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by {" "}
          <a href="https://www.linkedin.com/in/nthabiseng-monageng-115264185" target="_blank" rel="noreferrer" className="footer-link">Nthabiseng Monageng</a> and is {" "} <a href="https://github.com/Nthabi23/final-react-project" target="_blank" rel="noreferrer" className="footer-link">open-source</a> on Github 
        </footer>
      </div>
    </div>
  );
}
