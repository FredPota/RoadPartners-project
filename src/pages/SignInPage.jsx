
import "../assets/loginPage.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignInPage() {

    const navigate = useNavigate();

    // 🔹 estados
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // 🔹 registro
    const handleRegister = async (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !correo || !telefono || !password || !confirmPassword) {
            alert("Por favor, completa todos los campos");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: nombre + " " + apellido,
                    correo: correo,
                    telefono: telefono,
                    contraseña: password,
                    tipo_usuario: "pasajero"
                })
            });

            const data = await response.json();
            //console.log(data);

            if (!response.ok) {
                throw new Error(data.message || "Error al registrar");
            }

            alert("Usuario registrado correctamente");

            navigate('/login');

        } catch (error) {
            console.error(error);
            alert("Error al registrar");
        }
    }

    return (
        <div className="sign-in-page">
            <form className="signin-container relative" onSubmit={handleRegister}>
                
                <h1 className="title-form">Registro de Usuario</h1>
                
                <div className="login-form relative" id="personal-info">

                    <h2 className="subtitle-form bg-PageLight-950 -top-5">
                        Información de la Cuenta
                    </h2>

                    <div className="flex w-2/3 gap-5">
                        <input className="input-form" placeholder="Nombre(s)" type="text"
                            onChange={(e) => setNombre(e.target.value)} />

                        <input className="input-form" placeholder="Apellido(s)" type="text"
                            onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="flex w-2/3 flex-col gap-5">
                        <input className="input-form" placeholder="Correo Electrónico" type="email"
                            onChange={(e) => setCorreo(e.target.value)} />

                        <input className="input-form" placeholder="Número de Teléfono" type="tel"
                            onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="relative w-1/2">
                        <label>Fecha de Nacimiento</label>
                        <input className="input-form basis-50" type="date" />
                    </div>

                    <div className="flex w-2/3 flex-col gap-5">
                        <input className="input-form" placeholder="Contraseña" type="password"
                            onChange={(e) => setPassword(e.target.value)} />

                        <input className="input-form" placeholder="Confirmar Contraseña" type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    
                    <button className="btnSubmit-form" type="submit">
                        Registrarse
                    </button>

                </div>
            </form>
        </div>
    );
}

export default SignInPage;

