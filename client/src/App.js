import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import History from "./page/History";
import Email from "./page/Email";
import "./App.css";
import LineChart from './function/chart'

function App() {
  return (
    <div>
      <LineChart/>
      {/* <Home/> */}
      {/* <History/> */}
      {/* <Email/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/email" element={<Email />} />
        <Route path="*" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;