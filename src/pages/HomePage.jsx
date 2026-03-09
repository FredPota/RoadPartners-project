import '../assets/homePage.css'
import { useNavigate } from 'react-router-dom';
import Header from '../components/header.jsx';
import StarRating from '../components/starRating.jsx';
import TravelCard from '../components/travelCard.jsx';
import AvailableTravels from '../components/availableTravels.jsx';
import { useState } from 'react';

// página de inicio - hasta ahora solo es para probar el routing
// Aqui se hara la busqueda de viajes, se mostraran los viajes disponibles, y se podran filtrar por diferentes criterios (origen, destino, fecha, etc)
function HomePage() {
    
    const [isSearching, setIsSearching] = useState(false);

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                
                <div id="map-container">
                    <div className='travel-container'>
                        <form className='travel-form' action="">
                            <h3 className='title-form'>Encuentra un viaje</h3>
                            <div className='login-group'>

                            </div>
                            <input placeholder='Punto de salida: ' type="text" name="start-origin" id="start-origin" className="input-form" />
                            <input placeholder='Destino: ' type="text" name="start-destiny" id="start-destiny" className="input-form" />
                            
                            <button type='button' onClick={() => setIsSearching(true)} className='btnSubmit-form self-center'>Buscar Viaje</button>
                        </form>

                    </div>
                    <div className='map-home'>

                        {isSearching===true && <AvailableTravels setissearching={setIsSearching} />}

                        <div id="publish-btn">Crear Viaje</div>
                    </div>
                </div>
                {/* <div id="search-btn">Buscar Viaje</div> */}
                <div id="recentTravels-container" className="recent-travels-container">
                    <h3>Viajes Recientes</h3>
                    <ul className="list-container">
                        <TravelCard travel={{ id: 1, destino: "Facultad de Ciencias Físico Matemáticas", rol: "Conductor", pasajeros: 2, fecha: "2025-10-01", hora: "10:00 am", costo: 40, distancia: 15, estado: "Terminado", rating: 5 }} />
                        <TravelCard travel={{ id: 2, destino: "Facultad de Informática", rol: "Pasajero", pasajeros: 3, fecha: "2025-10-02", costo: 200, distancia: 17, estado: "Terminado", rating: 4 }} />

                    </ul>
                </div>

            </div>

            
            
        </div>
    );
}

export default HomePage;