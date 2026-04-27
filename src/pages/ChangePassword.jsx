import { useState } from "react";

function ChangePassword({ setisEditing }) {

    const [actual, setActual] = useState("");
    const [nueva, setNueva] = useState("");
    const [confirmNueva, setConfirmNueva] = useState("");

    const handleChangePassword = async () => {

        console.log("🔥 CLICK DETECTADO");
        console.log("📤 ENVIANDO:", { actual, nueva });

        if (!actual || !nueva || !confirmNueva) {
            alert("Completa todos los campos");
            return;
        }

        if (nueva !== confirmNueva) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("No hay sesión activa");
                return;
            }

            const res = await fetch("http://localhost:3000/usuario/password", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({
                    actual,
                    nueva
                })
            });

            console.log("📡 STATUS:", res.status);

            const data = await res.json();
            console.log("🔐 RESPUESTA:", data);

            if (!res.ok) {
                alert(data.message);
                return;
            }

            alert("Contraseña actualizada correctamente");

            setActual("");
            setNueva("");
            setConfirmNueva("");

            setisEditing("");

        } catch (error) {
            console.error("❌ ERROR:", error);
            alert("Error al cambiar contraseña");
        }
    };

    return (
        <div className="flex flex-col gap-4">

            <h3>Cambiar Contraseña</h3>

            <input
                type="password"
                placeholder="Contraseña actual"
                value={actual}
                onChange={(e) => setActual(e.target.value)}
            />

            <input
                type="password"
                placeholder="Nueva contraseña"
                value={nueva}
                onChange={(e) => setNueva(e.target.value)}
            />

            <input
                type="password"
                placeholder="Confirmar nueva contraseña"
                value={confirmNueva}
                onChange={(e) => setConfirmNueva(e.target.value)}
            />

            {/* 🔥 IMPORTANTE: ya no es submit */}
            <button onClick={handleChangePassword}>
                Guardar nueva contraseña
            </button>

        </div>
    );
}

export default ChangePassword;