import Dropdown from './dropdown.jsx'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Header() {
    const [selectedAccountOption, setSelectedAccountOption] = useState(null);

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    const goLogin = () => {
        navigate("/login");
    }

    const goRegister = () => {
        navigate("/signIn");
    }

    const goProfile = () => {
        navigate("/profile");
    };

    return (
        <header className="header-container">
            {/* Logo con interactividad más suave */}
            <div className="company-btn" onClick={goHome}>
                <img
                    src="/auto.png"
                    alt="company-logo"
                    className="header-logo"
                />
                <span className="company-name">Viaje Compartido</span>
            </div>

            <nav className="nav-header">
                <button className="nav-header-btn" onClick={goHome}>
                    Inicio
                </button>
                <button className="nav-header-btn" onClick={goProfile}>
                    Mis Viajes
                </button>
                
                {/* Separador visual opcional */}
                <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>

                <Dropdown
                    options={[
                        { label: 'Mi Perfil', value: 'profile', onClick: goProfile },
                        { label: 'Iniciar Sesión', value: 'login', onClick: goLogin },
                        { label: 'Registrarse', value: 'register', onClick: goRegister },
                        { label: 'Cerrar Sesión', value: 'logOut', onClick: goLogin}
                    ]}
                    dropdownName="Cuenta"
                /> 
            </nav>
        </header>
    );
}

export default Header;