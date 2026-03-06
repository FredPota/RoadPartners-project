import "../assets/loginPage.css"
import { useNavigate } from "react-router-dom";

function SignInPage() {

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }


    return (
        <div className="sign-in-page">
            {/* Aquí puedes agregar el formulario de registro de usuario */}
            <form className="login-container" action="">
                            <h1>Registro de Usuario</h1>
                
                <div className="login-form" id="personal-info">
                    <h2 className="self-start pl-7 m-0">Información de la Cuenta</h2>
                    <input className="input-form" placeholder="Nombre(s)" type="text" name="name" id="name" />
                    <input className="input-form" placeholder="Apellido(s)" type="text" name="lastname" id="lastname" />
                    <input className="input-form" placeholder="Correo Electrónico" type="email" name="email" id="email" />
                    <input className="input-form" placeholder="Contraseña" type="password" name="password" id="password" />
                    <input className="input-form" placeholder="Confirmar Contraseña" type="password" name="confirmPassword" id="confirmPassword" />
                </ div>
                <hr className="hr-form" />
                
                {/* <div className=" login-form" id="payment-info">
                    <h2 className="self-start pl-7 m-0">Información de Pago</h2>
                    <input className="input-form" placeholder="Titular de la tarjeta" type="text" />
                    <input className="input-form" placeholder="Número de Tarjeta" type="text" name="cardNumber" id="cardNumber" />
                    <div className="login-group" id="card-details"> 
                        <div className="login-group">
                            <label htmlFor="expirationDate">Fecha de Expiración: </label>
                            <input className="input-form basis-40" id="expirationDate" type="date" />
                        </div>
                        <input className="input-form basis-40" placeholder="CVV" type="text" name="cvv" id="cvv" />
                    </div>
                </div>
                
                <div className="login-form">
                    <div className="text-content">
                        <h2 className="subtitle-form" >Verificación</h2>
                        <div className="text-content">
                            
                            <p className="text-tiny">Verificar tu perfil le otroga a los demás usuarios la confianza de que eres una persona real y pueden viajar contigo; tendrás mas oportunidades de que te acepten en viajes y facilidad para otras funcionalidades</p>
                            <p className="text-tiny">Para verificar tu autenticidad se te pedira una foto de tu ine, no te preocupes para que haya una revision humana de que en realidad existes. Una vez tengas respuesta se borrara tu ine de la base de datos.</p>
                            
                        </div>
                    </div>
                    
                    <div className="login-group">
                        <label htmlFor="verification-doc">Subir Documento de Verificación:</label>
                        <input className="input-form basis-60" type="file" accept="" enctype="multipart/form-data" accept=".jpg, .jpeg, .png"
                        name="verification-doc" id="verification-doc" />
                    </div>
                </div> */}
                <button className="btnSubmit-form" type="submit" onClick={goToLogin}>Registrarse</button>
            </form>

            
        </div>
    );
}

export default SignInPage;