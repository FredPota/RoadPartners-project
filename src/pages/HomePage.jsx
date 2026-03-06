import '../assets/homePage.css'
import { useNavigate } from 'react-router-dom';

// página de inicio - hasta ahora solo es para probar el routing
// Aqui se hara la busqueda de viajes, se mostraran los viajes disponibles, y se podran filtrar por diferentes criterios (origen, destino, fecha, etc)
function HomePage() {

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="home-container">
            <h1>Welcome to RoadPartners!</h1>
            <p>Your trusted companion for all your road trip needs. Plan, navigate, and enjoy your journey with us.</p>
            <button onClick={() => { goToLogin(); }}>Get Started</button>
            
        </div>
    );
}

export default HomePage;