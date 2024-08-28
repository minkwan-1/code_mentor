import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  MentorPage,
  MentorDetailPage,
  CareerCasePage,
  MenteePage,
  CodeReviewPage,
  AuthPage,
  MentorAddPage,
  MenteeAddPage,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mentor" element={<MentorPage />} />
      <Route path="/mentor/:id" element={<MentorDetailPage />} />
      <Route path="/mentee" element={<MenteePage />} />
      <Route path="/review" element={<CodeReviewPage />} />
      <Route path="/career" element={<CareerCasePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/mentor_add" element={<MentorAddPage />} />
      <Route path="/mentee_add" element={<MenteeAddPage />} />
    </Routes>
  );
};

export default App;
