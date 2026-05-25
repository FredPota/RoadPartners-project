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
import PlacesInput from '../components/placesInput.jsx';
import Map from '../components/map.jsx';
import { use, useState, useEffect } from 'react';
import { LocationIcon } from '../components/createTravelForm.jsx';
import { u } from 'framer-motion/client';
import { useJsApiLoader } from "@react-google-maps/api";

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

/*const lastPartners = [
    { name: "María García", date: "14 de marzo", dest: "Facultad de Informática", photoSrc: null, verified: true },
    { name: "Juan Pérez", date: "12 de marzo", dest: "Facultad de Medicina", photoSrc: null, verified: false }
];*/


function HomePage() {
    
    const [isSearching, setIsSearching] = useState(false);
    const [creatingTravel, setCreatingTravel] = useState(false);
    const [UserCars, setUserCars] = useState([]);

    // ← Agrega estos tres estados
    const [searchOrigin, setSearchOrigin] = useState(null);
    const [searchDestiny, setSearchDestiny] = useState(null);
    const [searchDate, setSearchDate] = useState('');
    const [availableTravels, setAvailableTravels] = useState([]);

    const [nextTravels, setNextTravels] = useState([]);
    const [recentTravels, setRecentTravels] = useState([]);

    const [selectedTravel, setSelectedTravel] = useState(null);
    const [partnersData, setPartnersData] = useState([]);

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
        libraries: ['places']
    });


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

    const handleSearch = async () => {
        if (!searchOrigin?.location || !searchDestiny?.location) {
            alert('Por favor selecciona el origen y destino de las sugerencias de Google Maps');
            return;
        }
        if (!searchDate) {
            alert('Por favor selecciona una fecha');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/travels/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    origen: searchOrigin,
                    destino: searchDestiny,
                    fechaSalida: searchDate,
                    id_usuario: JSON.parse(localStorage.getItem('user'))._id
                })
            });

            const data = await response.json();

            if (response.ok) {
                setAvailableTravels(data);
                setIsSearching(true);
            } else {
                setAvailableTravels([]);
                setIsSearching(true);
            }
        } catch (error) {
            console.error('Error al buscar viajes:', error);
            alert('No se pudo realizar la búsqueda');
        }
    };

    const handlerJoinTravel = async () => {

        if (!selectedTravel) {
            alert('Por favor selecciona un viaje para unirte');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/travels/join/${selectedTravel._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    id_usuario: JSON.parse(localStorage.getItem('user'))._id
                })
            });
            

            if (response.ok) {
                setIsSearching(false);
                fetchNextTravels(); // Actualiza la lista de próximos viajes para reflejar el nuevo viaje unido
                alert('Te has unido al viaje exitosamente');
                setSelectedTravel(null);
            } else {
                const data = await response.json();
                alert(data.message || 'No se pudo unir al viaje');
            }
        } catch (error) {
            console.error('Error al unirse al viaje:', error);
            alert('No se pudo realizar la operación');
        }
    };

    //obtener viajes del usuario proximos

    const id_usuario = JSON.parse(localStorage.getItem('user'))._id;

    const fetchNextTravels = async () => {
        try {
            const response = await fetch(`http://localhost:3000/travels/ownIn/${id_usuario}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    estado: "Próximo"
                })
            });

            const data = await response.json();

            if (response.ok) {
                setNextTravels(data);
            } else {
                setNextTravels([]);
            }
        } catch (error) {
            console.error('Error al obtener los próximos viajes:', error);
            setNextTravels([]);
        }
    };

    const fetchRecentTravels = async () => {
        try {
            const response = await fetch(`http://localhost:3000/travels/ownIn/${id_usuario}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    estado: "completado"
                })
            });

            const data = await response.json();

            if (response.ok) {
                setRecentTravels(data);
            } else {
                setRecentTravels([]);
            }

        } catch (error) {
            console.error('Error al obtener los viajes recientes:', error);
            setRecentTravels([]);
        }
    };
    
    const fetchPartnersFromRecentTravels = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const currentUserId = user._id;

        const response = await fetch(`http://localhost:3000/travels/ownIn/${currentUserId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ estado: "completado" })
        });

        const travels = await response.json();

        if (!response.ok) {
            setPartnersData([]);
            return;
        }

        const partnersMap = new Map();

        for (const travel of travels) {
            let partnerId = null;
            
            if (travel.conductor_id?._id === currentUserId || travel.conductor_id === currentUserId) {
                const passengerId = travel.pasajeros?.[0]?._id || travel.pasajeros?.[0];
                if (passengerId && passengerId !== currentUserId) {
                    partnerId = passengerId;
                }
            } else {
                partnerId = travel.conductor_id?._id || travel.conductor_id;
            }

            if (partnerId && partnerId !== currentUserId && !partnersMap.has(partnerId)) {
                let partnerName = `Usuario ${partnerId}`;
                let partnerVerified = false;

                try {
                    const userResponse = await fetch(`http://localhost:3000/users/${partnerId}`, {
                        headers: { 'Authorization': `${localStorage.getItem('token')}` }
                    });
                    const userData = await userResponse.json();
                    if (userResponse.ok) {
                        partnerName = userData.nombre || userData.name || partnerName;
                        partnerVerified = userData.verified || false;
                    }
                } catch (err) {
                    console.error(`Error obteniendo usuario ${partnerId}:`, err);
                }

                partnersMap.set(partnerId, {
                    id_usuario: partnerId,
                    id_viaje: travel._id,
                    id_autor: currentUserId,
                    name: partnerName,
                    date: travel.fechaSalida ? new Date(travel.fechaSalida).toLocaleDateString() : "Fecha desconocida",
                    dest: travel.destino?.texto || travel.destino || "Destino",
                    verified: partnerVerified,
                    photoSrc: null
                });
            }
        }

        setPartnersData(Array.from(partnersMap.values()));
    } catch (error) {
        console.error('Error al obtener partners:', error);
        setPartnersData([]);
    }
};

    useEffect(() => {
        fetchNextTravels();
        fetchRecentTravels();
        fetchPartnersFromRecentTravels();

    }, []);

    console.log('Viajes próximos:', nextTravels);
    console.log('Viajes recientes:', recentTravels);


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

                            {isLoaded ? (
                                <>
                                    <PlacesInput
                                        label="Origen"
                                        onPlaceSelected={(data) => setSearchOrigin(data)}
                                    />
                                    <PlacesInput
                                        label="Destino"
                                        onPlaceSelected={(data) => setSearchDestiny(data)}
                                    />
                                </>
                            ) : (
                                <p>Cargando...</p>
                            )}

                            <input type="date" value={searchDate} onChange={(e) => setSearchDate(e.target.value)} className='input-form' />

                            <button type='button' onClick={handleSearch} className='btnSubmit-form self-center'>Buscar Viaje</button>
                        </form>

                    </div>
                    <div className='map-home'>
                        <Map isLoaded={isLoaded} selectedTravel={selectedTravel} searchOrigin={searchOrigin} />
                        {isSearching===true && <AvailableTravels handlerJoinTravel={handlerJoinTravel} handlerSelectedTravel={setSelectedTravel} travels={availableTravels} setissearching={setIsSearching} />}
                        

                        <div id="publish-btn" onClick={handleCreateTravel}>Crear Viaje</div>
                    </div>

                    {creatingTravel==true && <CreateTravelForm onexit={setCreatingTravel} UserCarList={UserCars} />}
                </div>
                {/* <div id="search-btn">Buscar Viaje</div> */}

                <div id="" className="w-[150%] mt-10">
                    <h3 className="text-xl mb-4 ">Proximos Viajes</h3>
                    <ul className="list-container bg-DarkBlue/20">
                        {nextTravels.map((travel) => (
                            <TravelCard2 key={travel.id} travel={travel}
                            onDelete={(id) => {
                                //Remover al elemento de la lista
                                setNextTravels(prev => prev.filter(t => t._id !== id));
                            }}
                            />
                        ))}
                    </ul>
                </div>
                <div id="" className="w-[150%] mt-20">
                    <h3 className="text-xl mb-4 ">Viajes Recientes</h3>
                    <ul className="list-container bg-DarkBlue/20">
                        {recentTravels.map((travel) => (
                            <TravelCard2 key={travel.id} travel={travel} />
                        ))}
                    </ul>
                </div>
                <div className="recent-profiles-container w-[150%] mt-20">
                    <h3 className="text-xl mb-4 text-center w-full">Partners Recientes</h3>
                    <ul className="list-container bg-white/90">
                        {partnersData.length === 0 ? (
                         <li className="text-center text-gray-500 p-4">Aún no tienes viajes completados con otros usuarios</li>
                         ) : (
                             partnersData.map((partner, index) => (
                            <ProfileCards2
                                 key={partner.id_usuario || index}
                                name={partner.name}
                                date={partner.date}
                                dest={partner.dest}
                                photoSrc={partner.photoSrc || "/usuario.png"}
                                verified={partner.verified}
                                id_viaje={partner.id_viaje}
                                id_usuario={partner.id_usuario}
                                id_autor={partner.id_autor}
                                                             />
                                                                 ))
                                                                    )}
                             </ul>
                        </div>

            </div>

            
            
        </div>
    );
}

export default HomePage;