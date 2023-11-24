import Weather from "./Weather";
import "./App.css";


 export default function App() {
  return(
    <div className="App">
      <div fluid="sm" className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by {" "}
          <a href="" target="_blank" rel="noreferrer" className="footer-link">Nthabiseng Monageng</a> and is {" "} <a href="" target="_blank" rel="noreferrer" className="footer-link">open-source</a> on Github and hosted on {" "} <a href="" target="_blank" rel="noreferrer" className="footer-link">Netlify</a> 
        </footer>
      </div>
    </div>
  );
}
