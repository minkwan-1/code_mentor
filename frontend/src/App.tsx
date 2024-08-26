import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  MentorPage,
  MentorDetailPage,
  CareerCasePage,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mentor" element={<MentorPage />} />
      <Route path="/mentor/:id" element={<MentorDetailPage />} />
      <Route path="/career" element={<CareerCasePage />} />
    </Routes>
  );
};

export default App;
