import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/header.jsx';
import PaymentForm from '../components/payment-form';
import TravelHistory from '../components/travelhistory.jsx';
import ChangePassword from '../components/change-password.jsx';
import VerifyProfile from '../components/verify-profile.jsx';
import '../assets/loginPage.css';
import '../assets/containers.css';

function ProfilePage() {

    const [activeSection, setActiveSection] = useState('personalInfo');
    const [isEditing, setIsEditing] = useState('');

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <Header />
            <div className="profile-page">
                <nav className="nav-profile">
                    <button className="menu-profile-btn" onClick={() => setActiveSection('personalInfo')}>Info</button>
                    <button className="menu-profile-btn" onClick={() => setActiveSection('carProfile')}>Car</button>
                    <button className="menu-profile-btn" onClick={() => setActiveSection('paymentMethods')}>Pay</button>
                    <button className="menu-profile-btn" onClick={() => setActiveSection('travelHistory')}>Hist</button>
                </nav>
                <div id="profile-container">
                    <div className="flex flex-row" id="profile-header">
                        <img src="vite.svg" alt="profile-picture" />
                        <h1 className="text-6xl">John Doe</h1>
                    </div>
                    {activeSection === 'personalInfo' && (
                        <div>
                            <div className="text-left" id="profile-content">

                                <p className='subtitle-form bg-[#262626] -top-4'>Información Personal</p>

                                {isEditing === 'info' ? (
                                    <form className="flex flex-col gap-4">
                                        <div className='login-group'>
                                            <label htmlFor="email">Email:</label>
                                            <input className="input-form" name="email" type="email" defaultValue="john.doe@example.com" />
                                        </div>
                                        <button className="btnSubmit-form" type="submit">Guardar Cambios</button>
                                    </form>
                                ) : (
                                    <>
                                        <p>Email: john.doe@example.com</p>
                                    </>
                                )}


                            <nav className="nav-btns gap-1"> 
                                <button className="profile-btn" onClick={() => setIsEditing('verify')}>Verificar Perfil</button>
                                <button className="profile-btn" onClick={() => setIsEditing('info')}>Editar Información Personal</button>
                                <button className="profile-btn" onClick={() => setIsEditing('password')}>Cambiar Contraseña</button>
                                <button className="profile-btn" onClick={goToLogin}>Cerrar Sesión</button>
                            </nav>
                        </div>

                    </div>
                    )}

                    {isEditing === 'password' && <ChangePassword setisEditing={setIsEditing} />}
                    {isEditing === 'verify' && <VerifyProfile setisediting={setIsEditing} />}
                    {activeSection === 'paymentMethods' && <PaymentForm />}
                    {activeSection === 'travelHistory' && <TravelHistory />}

                    <button className='profile-btn' onClick={goToHome}>Regresar a la HomePage</button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;