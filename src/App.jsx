import Hangman from "./pages/Hangman/Hangman";
import Victory from "./pages/Results/Victory";
import Fail from "./pages/Results/Fail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hangman />} />
      <Route path="/victory" element={<Victory />} />
      <Route path="fail" element={<Fail />} />
    </Routes>
  );
}

export default App;
