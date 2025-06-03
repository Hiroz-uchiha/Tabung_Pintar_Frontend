import Navbar from './Halaman/Beranda/Navbar'
import Login from "./Halaman/Authorization/Login";
import Register from "./Halaman/Authorization/Register";
import Beranda from "./Halaman/Beranda/Beranda";
import "./tailwinds/output.css"
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import ProtectedRoute from './Halaman/Authorization/ProtectedRoute';

function Layout() {
  const location = useLocation()
  const hideNavbarPaths = ['/login','/register']

  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<ProtectedRoute><Beranda /> </ProtectedRoute> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
    
}

const App = () => {
  return(
    <Router>
      <Layout />
    </Router>
  )
}

export default App;
