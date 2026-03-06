import '../assets/loginPage.css'

function LoginForm() {
  return (
    <div className="login-container ">
        <h2 className='title-form' >Inicio de Sesión</h2>
        <form className="login-form"> 
            <div className="login-group">
                <label htmlFor="username">Username:</label>
                <input className='input-form' type="text" id="username" name="username" required />
            </div>
            <div className="login-group">
                <label htmlFor="password">Password:</label>
                <input className='input-form' type="password" id="password" name="password" required />
            </div>
            <button className='btnSubmit-form' type="submit">Login</button>
        </form>
    </div>
  );
}

export default LoginForm;