
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import ProfilePage from "./pages/profilePage.jsx"; // 👈 IMPORTANTE
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // 👈 IMPORTANTE

function App() {
  return (
    <Router>
      <Routes>

        {/* 🔐 PROTEGIDA */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />

        {/* 🔐 PROTEGIDA */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />

        {/* 🟢 LIBRES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignInPage />} />

      </Routes>
    </Router>
  );
}

export default App;

