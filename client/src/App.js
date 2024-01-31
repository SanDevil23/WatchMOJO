// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Free from "./pages/Free";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trial" element={<Free/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
