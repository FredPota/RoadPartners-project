import '../assets/homePage.css'
import { useNavigate } from 'react-router-dom';
import Header from '../components/header.jsx';
import StarRating from '../components/starRating.jsx';
import TravelCard from '../components/travelCard.jsx';
import TravelCard2 from '../components/TravelCard2.jsx';
import AvailableTravels from '../components/availableTravels.jsx';
import ProfileCards from '../components/ProfileCards.jsx';
import ProfileCards2 from '../components/ProfileCards2.jsx';
import CreateTravelForm from '../components/createTravelForm.jsx';
import Map from '../components/map.jsx';
import { useState } from 'react';

// página de inicio - hasta ahora solo es para probar el routing
// Aqui se hara la busqueda de viajes, se mostraran los viajes disponibles, y se podran filtrar por diferentes criterios (origen, destino, fecha, etc)

const lastPartners = [
    { name: "María García", date: "14 de marzo", dest: "Facultad de Informática", photoSrc: null, verified: true },
    { name: "Juan Pérez", date: "12 de marzo", dest: "Facultad de Medicina", photoSrc: null, verified: false }
];

function HomePage() {
    
    const [isSearching, setIsSearching] = useState(false);
    const [creatingTravel, setCreatingTravel] = useState(false);

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
                        <Map />
                        {isSearching===true && <AvailableTravels setissearching={setIsSearching} />}
                        

                        <div id="publish-btn" onClick={() => setCreatingTravel(true)}>Crear Viaje</div>
                    </div>

                    {creatingTravel==true && <CreateTravelForm onexit={setCreatingTravel} />}
                </div>
                {/* <div id="search-btn">Buscar Viaje</div> */}

                <div id="" className="w-[150%] mt-10">
                    <h3 className="text-xl mb-4 ">Proximos Viajes</h3>
                    <ul className="list-container bg-DarkBlue/20">
                        <TravelCard2 travel={{ id: 1, destino: "Facultad de Ciencias Físico Matemáticas", rol: "Conductor", pasajeros: 2, fecha: "13 de marzo 10:00 am", hora: "10:00 am", costo: 40, distancia: 15, estado: "Próximo", rating: 0 }} />
                        <TravelCard2 travel={{ id: 2, destino: "Facultad de Informática", rol: "Pasajero", pasajeros: 3, fecha: "12 de Marzo 8:00 am", costo: 200, distancia: 17, estado: "Próximo", rating: 0 }} />
                        <TravelCard2 travel={{ id: 3, destino: "Facultad de Medicina", rol: "Conductor", pasajeros: 1, fecha: "14 de marzo 9:00 am", hora: "9:00 am", costo: 50, distancia: 20, estado: "Próximo", rating: 0 }} />
                    </ul>
                </div>
                <div id="" className="w-[150%] mt-20">
                    <h3 className="text-xl mb-4 ">Viajes Recientes</h3>
                    <ul className="list-container bg-DarkBlue/20">
                        <TravelCard2 travel={{ id: 1, destino: "Facultad de Ciencias Físico Matemáticas", rol: "Conductor", pasajeros: 2, fecha: "2025-10-01", hora: "10:00 am", costo: 40, distancia: 15, estado: "Terminado", rating: 5 }} />
                        <TravelCard2 travel={{ id: 2, destino: "Facultad de Informática", rol: "Pasajero", pasajeros: 3, fecha: "2025-10-02", costo: 200, distancia: 17, estado: "Terminado", rating: 4 }} />
                    </ul>
                </div>
                <div className="recent-profiles-container w-[150%] mt-20">
                    <h3 className="text-xl mb-4 text-center w-full">Partners Recientes</h3>
                    <ul className="list-container bg-white/90">
                        {lastPartners.map((partner, index) => (
                            <ProfileCards2
                                key={index}
                                name={partner.name}
                                date={partner.date}
                                dest={partner.dest}
                                photoSrc={"/usuario.png"}
                                verified={partner.verified}
                            />
                        ))}
                    </ul>
                </div>

            </div>

            
            
        </div>
    );
}

export default HomePage;