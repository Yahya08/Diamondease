import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import History from "./pages/History";
import Videos from "./pages/Videos";

export default function App() {
  return <div>
    <Routes>
      <Route path="/" Component={Homepage}/>
      <Route path="/history" Component={History}/>
      <Route path="/Vidio" Component={Videos}/>
    </Routes>
  </div>
    
  
}