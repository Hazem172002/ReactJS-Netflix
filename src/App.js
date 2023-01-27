import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SIgnup from "./pages/SIgnup";

function App() {
  return (
    <>
    
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SIgnup />} />
    <Route path="/account" element={<Account />} />
    </Routes>
    
    </>
    
  );
}

export default App;
