import React from 'react';
import LoginForm from '../components/login-form.jsx';
import '../assets/loginPage.css';

//Componente de la página de inicio de sesión
function LoginPage() {
    return (
        <div className="login-page">
            <LoginForm />
        </div>
    );
}

export default LoginPage;