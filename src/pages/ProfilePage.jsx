import { useNavigate } from 'react-router-dom';
import PaymentForm from '../components/payment-form';
import TravelHistory from '../components/travelhistory.jsx';
import '../assets/loginPage.css';
import '../assets/containers.css';

function ProfilePage() {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className="profile-page">
            <nav className="nav-btns">
                <button className="profile-btn">Información Personal</button>
                <button className="profile-btn">Metodos de Pago</button>
                <button className="profile-btn">Historial de viajes</button>
            </nav>
            <div id="profile-container">
                <div className="flex flex-row" id="profile-header">
                    <img src="vite.svg" alt="profile-picture" />
                    <h1 className="">John Doe</h1>
                </div>
                
                <div>
                    <div className="text-left" id="profile-content">
                        <p>Nombre: John Doe</p>
                        <p>Email: john.doe@example.com</p>

                        <nav className="nav-btns gap-1"> 
                            <button className="">Verificar Perfil</button>
                            <button className="">Editar Información Personal</button>
                            <button className="">Cambiar Contraseña</button>
                            <button className="">Cerrar Sesión</button>
                        </nav>
                    </div>

                </div>
                

                <PaymentForm />

                <TravelHistory />

                <button onClick={goToHome}>Regresar a la HomePage</button>
            </div>
        </div>
        
    );
}

export default ProfilePage;