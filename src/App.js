import { BrowserRouter, Routes, Route } from "react-router-dom";
import AI from "./pages/AI";
import InfoTech from "./pages/InfoTech";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/clubs/ai" element={<AI />} />
        <Route path="/clubs/infotech" element={<InfoTech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
