// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Free from "./pages/Free";
import Register from "./pages/Register";
import VideoPlayer from "./pages/VideoPlayer";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trial" element={<Free />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/watch-console" element={<VideoPlayer />}></Route>
        <Route path="/v1" element={<Main />}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
