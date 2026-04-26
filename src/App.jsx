
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;

