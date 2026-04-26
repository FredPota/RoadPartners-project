import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const token = localStorage.getItem("token");

    // 🚫 si NO hay token → fuera
    if (!token) {
        return <Navigate to="/login" />;
    }

    // ✅ si hay token → entra
    return children;
}

export default ProtectedRoute;