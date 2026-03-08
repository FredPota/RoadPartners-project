import "../assets/loginPage.css"
import { useNavigate } from "react-router-dom";

function SignInPage() {

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }


    return (
        <div className="sign-in-page">
            <form className="signin-container relative" action="">
                            <h1 className="title-form">Registro de Usuario</h1>
                
                <div className="login-form relative" id="personal-info">
                    <h2 className="subtitle-form bg-PageLight-950 -top-5">Información de la Cuenta</h2>
                    <div className="flex w-2/3 gap-5">
                        <input className="input-form" placeholder="Nombre(s)" type="text" name="name" id="name" />
                        <input className="input-form" placeholder="Apellido(s)" type="text" name="lastname" id="lastname" />
                    </div>
                    <div className="flex w-2/3 flex-col gap-5">
                        <input className="input-form" placeholder="Correo Electrónico" type="email" name="email" id="email" />
                        <input className="input-form" placeholder="Número de Teléfono" type="tel" name="phone" id="phone" />
                    </div>

                    <div className="relative w-1/2" >
                        <label className="relative" htmlFor="birthday">Fecha de Nacimiento</label>
                        <input className="input-form basis-50" type="date" name="birthday" id="birthday" />
                    </div>
                    

                    <div className="flex w-2/3 flex-col gap-5">
                        <input className="input-form" placeholder="Contraseña" type="password" name="password" id="password" />
                        <input className="input-form" placeholder="Confirmar Contraseña" type="password" name="confirmPassword" id="confirmPassword" />
                    </div>
                    
                    <button className="btnSubmit-form" type="submit" onClick={goToLogin}>Registrarse</button>
                    
                    
                </div>
                
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
                
            </form>

            
        </div>
    );
}

export default SignInPage;