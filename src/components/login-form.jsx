import '../assets/loginPage.css'
import { useNavigate } from 'react-router-dom';

//Componente del formulario de inicio de sesión
function LoginForm() {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    const gotoSignIn = () => {
        navigate('/signin');
    }

  return (
    <div className="login-container ">
        <h2 className='title-form' >Inicio de Sesión</h2>
        <form className="login-form"> 

            <div className="login-group">
                <input placeholder="Nombre de usuario" className='input-form' type="text" id="username" name="username" required />
            </div>
            <div className="login-group">
                <input placeholder="Contraseña" className='input-form' type="password" id="password" name="password" required />
            </div>
            <button className='btnSubmit-form' type="submit" 
            onClick={(e) => {
                e.preventDefault();
                goToHome();
            }}> Login </button>
        </form>

        <p className='text-signin'>
            ¿No tienes una cuenta? 
            <span className='link-signin hover:text-PageLight-500' 
            onClick={gotoSignIn}>
                Regístrate aquí
            </span>
        </p>
        
    </div>
  );
}

export default LoginForm;