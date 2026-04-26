import "../assets/containers.css"
import "../assets/loginPage.css"
import TravelDetails from "./travel-details.jsx"
import TravelCard from "./travelCard.jsx";
import TravelCard2 from "./travelCard2.jsx";
import { useState } from "react";

function TravelHistory() {

    const [selectedTravel, setSelectedTravel] = useState(null);

    const sampleTravel = {
        id: 1,
        destino: "Plaza Mayor",
        fecha: "2024-06-15 14:30",
        rol: "Conductor",
        estado: "Próximo",
        rating: 4
    };

    return(
        <div className="travel-history-container relative">
            <h1 className="subtitle-form bg-[#eaffff] left-15 top-5 text-gray-950">Historial de Viajes</h1>
            <ul className="travel-history-list text-gray-900"                                              //viajes de prueba
                onWheel={(e) => {
                    e.currentTarget.scrollLeft += e.deltaY; 
                }}
            >
                <TravelCard2 compact={false} cardStyle={'light'} travel={sampleTravel} onclick={() => setSelectedTravel(sampleTravel)}   />
                <TravelCard2 compact={false} cardStyle={'light'} travel={{ id: 2, destino: "Facultad de Informática", fecha: "2024-05-10 09:00", rol: "Pasajero", estado: "Terminado", rating: 5 }} onclick={() => setSelectedTravel({ id: 2, destino: "Facultad de Informática", fecha: "2024-05-10 09:00", rol: "Pasajero", estado: "Terminado", rating: 5 })} />
                <TravelCard2 compact={false} cardStyle={'light'} travel={{ id: 3, destino: "Centro Comercial", fecha: "2024-04-20 18:00", rol: "Conductor", estado: "Cancelado", rating: 0 }} onclick={() => setSelectedTravel({ id: 3, destino: "Centro Comercial", fecha: "2024-04-20 18:00", rol: "Conductor", estado: "Cancelado", rating: 0 })} />
            </ul>

            {selectedTravel && <TravelDetails selectedTravel={selectedTravel} setSelectedTravel={setSelectedTravel} />}

        </div>

    );
};

export default TravelHistory;
