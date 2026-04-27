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
import { LocationIcon } from '../components/createTravelForm.jsx';

// página de inicio - hasta ahora solo es para probar el routing
// Aqui se hara la busqueda de viajes, se mostraran los viajes disponibles, y se podran filtrar por diferentes criterios (origen, destino, fecha, etc)

const user = {
    name: "Freddy",
    lastName: "García",
    email: "freddy.garcia@example.com",
    phone: "123-456-7890",
    registerDate: "2023-01-01",
    rating: 4.5,
    MOCK_CARS: [
        { id: 1, make: "Toyota", model: "Corolla", color: "#010101", year: 2020, plates: "ABC-123", capacity: 4 },
        { id: 2, make: "Honda", model: "Civic", color: "#010101", year: 2019, plates: "XYZ-456", capacity: 5 },
        { id: 3, make: "Ford", model: "Focus", color: "#010101", year: 2021, plates: "DEF-789", capacity: 5 }
    ],
};

const lastPartners = [
    { name: "María García", date: "14 de marzo", dest: "Facultad de Informática", photoSrc: null, verified: true },
    { name: "Juan Pérez", date: "12 de marzo", dest: "Facultad de Medicina", photoSrc: null, verified: false }
];


function HomePage() {
    
    const [isSearching, setIsSearching] = useState(false);
    const [creatingTravel, setCreatingTravel] = useState(false);
    const [UserCars, setUserCars] = useState([]);

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }


    const handleCreateTravel = async () => {
        const user = JSON.parse(localStorage.getItem('user')); // Reemplaza con la forma en que obtienes el ID del usuario
        const apiUrl = `http://localhost:3000/getCarsByDriver/${user._id}`; // Reemplaza con la URL de tu API y el ID del usuario

        try {
            console.log('Obteniendo autos del usuario con ID:', user._id);

            const response = await fetch(apiUrl , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}` // Si tu API requiere autenticación
                }
            });

            const data = await response.json();

            console.log('Carros del usuario:', data);

            setUserCars(data);
            setCreatingTravel(true);
            
        } catch (error) {
            console.error('Error al obtener los autos del usuario:', error);
            alert('No se pudo obtener la información de tus autos. Por favor, intenta nuevamente más tarde.');
        }


    }


    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                
                <div id="map-container">
                    <div className='travel-container'>
                        <form className='travel-form' action="">
                            <h3 className='title-form'>Encuentra un viaje</h3>
                            <div className='flex items-center gap-2 text-[12px]'>
                                <LocationIcon />
                                <p className=' text-center text-gray-600'>Puntos de Ruta</p>
                            </div>
                            <input placeholder='Punto de salida: ' type="text" name="start-origin" id="start-origin" className="input-form" />
                            <input placeholder='Destino: ' type="text" name="start-destiny" id="start-destiny" className="input-form" />
                            
                            <button type='button' onClick={() => setIsSearching(true)} className='btnSubmit-form self-center'>Buscar Viaje</button>
                        </form>

                    </div>
                    <div className='map-home'>
                        <Map />
                        {isSearching===true && <AvailableTravels setissearching={setIsSearching} />}
                        

                        <div id="publish-btn" onClick={handleCreateTravel}>Crear Viaje</div>
                    </div>

                    {creatingTravel==true && <CreateTravelForm onexit={setCreatingTravel} UserCarList={UserCars} />}
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