import logo from './logo.svg';
import './App.css';
import Admin from "./components/Admin.jsx"
import Add from "./components/Add.jsx"
import { Routes, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <header>
        <Link to="/"><img src="https://vietgangz.com/wp-content/uploads/2020/10/hihi.png" /></Link>
      </header>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
      <footer>
        <img src="https://vietgangz.com/wp-content/uploads/2021/12/257931156_115152007642980_4832071146801030749_n-800x800.jpg" />
        <img src="https://vietgangz.com/wp-content/uploads/2022/02/271531893_103561128889001_1267000409379128516_n-800x800.jpg" />
        <img src="https://vietgangz.com/wp-content/uploads/2021/12/32349267_142461816469235_4115782201008717824_n-800x800.jpg" />
        <img src="https://vietgangz.com/wp-content/uploads/2021/12/z3010840122299_86d8f564291db428d1e0cbe09b69323b-1181x800.jpg" />
      </footer>
    </div>
  );
}

export default App;
