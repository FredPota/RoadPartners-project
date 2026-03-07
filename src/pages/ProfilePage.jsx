import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PaymentForm from '../components/payment-form';
import TravelHistory from '../components/travelhistory.jsx';
import '../assets/loginPage.css';
import '../assets/containers.css';

function ProfilePage() {

    const [activeSection, setActiveSection] = useState('personalInfo');

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className="profile-page">
            <nav className="nav-btns">
                <button className="menu-profile-btn" onClick={() => setActiveSection('personalInfo')}>Información Personal</button>
                <button className="menu-profile-btn" onClick={() => setActiveSection('paymentMethods')}>Metodos de Pago</button>
                <button className="menu-profile-btn" onClick={() => setActiveSection('travelHistory')}>Historial de viajes</button>
            </nav>
            <div id="profile-container">
                <div className="flex flex-row" id="profile-header">
                    <img src="vite.svg" alt="profile-picture" />
                    <h1 className="">John Doe</h1>
                </div>
                {activeSection === 'personalInfo' && (
                    <div>
                        <div className="text-left" id="profile-content">
                            <p>Nombre: John Doe</p>
                            <p>Email: john.doe@example.com</p>

                        <nav className="nav-btns gap-1"> 
                            <button className="profile-btn">Verificar Perfil</button>
                            <button className="profile-btn">Editar Información Personal</button>
                            <button className="profile-btn">Cambiar Contraseña</button>
                            <button className="profile-btn">Cerrar Sesión</button>
                        </nav>
                    </div>

                </div>
                )}

                {activeSection === 'paymentMethods' && <PaymentForm />}
                {activeSection === 'travelHistory' && <TravelHistory />}

                <button className='profile-btn' onClick={goToHome}>Regresar a la HomePage</button>
            </div>
        </div>
        
    );
}

export default ProfilePage;