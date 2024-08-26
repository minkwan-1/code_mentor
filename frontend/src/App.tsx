import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CareerCasePage from "./pages/CareerCasePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/career" element={<CareerCasePage />} />
    </Routes>
  );
};

export default App;
