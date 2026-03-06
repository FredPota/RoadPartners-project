import "../assets/loginPage.css"
import { useNavigate } from "react-router-dom";

function SignInPage() {

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }


    return (
        <div className="sign-in-page">
            <h1>Sign In</h1>
            {/* Aquí puedes agregar el formulario de registro de usuario */}
            <form className="login-container" action="">
                <div className="" id="personal-info">
                    <input className="input-form" placeholder="Nombre(s)" type="text" name="name" id="name" />
                    <input className="input-form" placeholder="Apellido(s)" type="text" name="lastname" id="lastname" />
                    <input className="input-form" placeholder="Correo Electrónico" type="email" name="email" id="email" />
                    <input className="input-form" placeholder="Contraseña" type="password" name="password" id="password" />
                </ div>
                <div className="" id="payment-info">
                    <input className="input-form" placeholder="Titular de la tarjeta" type="text" />
                    <input className="input-form" placeholder="Número de Tarjeta" type="text" name="cardNumber" id="cardNumber" />
                    <input className="input-form" placeholder="Fecha de Expiración" type="text" name="expirationDate" id="expirationDate" />
                    <input className="input-form" placeholder="CVV" type="text" name="cvv" id="cvv" />
                    
                </div>
                <div>

                </div>
                <button className="btnSubmit-form" type="submit" onClick={goToLogin}>Registrarse</button>
            </form>

            
        </div>
    );
}

export default SignInPage;