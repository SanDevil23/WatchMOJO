// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Free from "./pages/Free";
import Register from "./pages/Register";
import Screen from "./components/Screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trial" element={<Free />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/watch-console" element={<Screen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
