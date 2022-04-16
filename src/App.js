import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Page/HomePage/HomePage";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
