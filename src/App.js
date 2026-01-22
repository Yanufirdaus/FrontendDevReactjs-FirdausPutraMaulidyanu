import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailResto from "./pages/DetailResto";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detailResto/:id" element={<DetailResto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
