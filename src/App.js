import Login from "./Halaman/Authorization/Login";
import Register from "./Halaman/Authorization/Register";
import Beranda from "./Halaman/Beranda/Beranda";
import "./tailwinds/output.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
    
}

export default App;
