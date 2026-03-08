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

            <div className="login-group group" onClick={goHome}>
                <img
                    src="/auto.png"
                    alt="company-logo"
                    className="header-logo"
                />
                <span className="company-name">RoadPartners</span>
            </div>

            <nav className="nav-header">
                <button className="nav-header-btn"
                    onClick={goHome}
                >
                    Home
                </button>
                <button
                    className="nav-header-btn"
                    onClick={goProfile}
                >
                    Mi Perfil
                </button>
                <button 
                    className="nav-header-btn"
                    onClick={goProfile}
                >
                    Mis Viajes
                </button>
                <Dropdown
                    options={[
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