import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import History from "./pages/History";
import Videos from "./pages/Videos";
import Detailpage from "./pages/DetailPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/history" element={<History />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/Detailpage" element={<Detailpage />} />
      </Routes>
    </div>
  );
}
