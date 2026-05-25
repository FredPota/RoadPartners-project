import { useState } from "react";

function ChangePassword({ setisediting }) {

    const [actual, setActual] = useState("");
    const [nueva, setNueva] = useState("");
    const [confirmNueva, setConfirmNueva] = useState("");

    const handleChangePassword = async (e) => {
        e.preventDefault(); // 🔥 evita refresh

        console.log("🔥 SUBMIT DETECTADO");

        // validar
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

            //console.log("📡 STATUS:", res.status);

            const data = await res.json();
            //console.log("🔐 RESPUESTA:", data);

            if (!res.ok) {
                alert(data.message);
                return;
            }

            alert("Contraseña actualizada correctamente");

            // limpiar
            setActual("");
            setNueva("");
            setConfirmNueva("");

            // cerrar modal
            setisediting("");

        } catch (error) {
            console.error("❌ ERROR:", error);
            alert("Error al cambiar contraseña");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="bg-PageLight-950 w-100 h-100 p-5 rounded-4xl relative text-PageDark-950">
                
                <form 
                    className="login-form p-10 h-full"
                    onSubmit={handleChangePassword}
                >

                    <h2 className="title-form">Cambio de Contraseña</h2>

                    <div className="form-group">
                        <label>Contraseña Actual:</label>
                        <input 
                            className="input-form"
                            type="password"
                            value={actual}
                            onChange={(e) => setActual(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Nueva Contraseña:</label>
                        <input 
                            className="input-form"
                            type="password"
                            value={nueva}
                            onChange={(e) => setNueva(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirmar Contraseña:</label>
                        <input 
                            className="input-form"
                            type="password"
                            value={confirmNueva}
                            onChange={(e) => setConfirmNueva(e.target.value)}
                        />
                    </div>

                    <button className="btnSubmit-form" type="submit">
                        Cambiar Contraseña
                    </button>

                    <button 
                        type="button"
                        className="exit-btn top-8 right-8"
                        onClick={() => setisediting('')}
                    >
                        X
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ChangePassword;