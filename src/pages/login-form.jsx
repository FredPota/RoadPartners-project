import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        // 🔥 DEBUG 1 - confirma que el form funciona
        //console.log("🔥 CLICK EN LOGIN FORM");

        //console.log("📨 DATOS ENVIADOS:", { correo, contraseña });

        try {
            const res = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    correo,
                    contraseña
                })
            });

            // 📡 DEBUG 2 - status HTTP
            //console.log("📡 STATUS RESPONSE:", res.status);

            // 🧪 DEBUG 3 - respuesta cruda antes de parsear
            const rawText = await res.text();
            //console.log("📦 RAW RESPONSE:", rawText);

            let data;
            try {
                data = JSON.parse(rawText);
            } catch (err) {
                console.error("❌ ERROR PARSEANDO JSON:", err);
                return;
            }

            //console.log("📦 RESPUESTA BACKEND:", data);

            // 🔴 validar token
            if (!data.token) {
                console.warn("⚠️ NO SE RECIBIÓ TOKEN DEL BACKEND");
            } else {
                console.log("🔐 TOKEN JWT:", data.token);
            }

            if (!res.ok) {
                setError(data.message);
                return;
            }

            // 🔐 guardar sesión
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.usuario));

            // console.log("💾 TOKEN LOCALSTORAGE:", localStorage.getItem("token"));
            // console.log("👤 USER LOCALSTORAGE:", localStorage.getItem("user"));

            // 🚀 ir a home
            navigate("/");

        } catch (err) {
            console.error("❌ ERROR FETCH LOGIN:", err);
            setError("Error de conexión con el servidor");
        }
    };

    return (
        
        <form onSubmit={handleLogin} className="login-container">

            <h2>Iniciar Sesión</h2>

            <input className="input-form"
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />

            <input className="input-form"
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
            />

            <button className="btnSubmit-form" type="submit">Entrar</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

        </form>
    );
}

export default LoginForm;