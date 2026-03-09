import "../assets/containers.css"
import "../assets/loginPage.css"
import TravelDetails from "./travel-details.jsx"
import TravelCard from "./travelCard.jsx";
import { useState } from "react";

function TravelHistory() {

    const [selectedTravel, setSelectedTravel] = useState(null);

    return(
        <div className="travel-history-container relative">
            <h1 className="subtitle-form bg-[#262626] left-15 top-5">Historial de Viajes</h1>
            <ul className="travel-history-list"                                              //viajes de prueba
                onWheel={(e) => {
                    e.currentTarget.scrollLeft += e.deltaY; 
                }}
            >
                <TravelCard 
                    compact={false} 
                    onclick={() => setSelectedTravel({ id: 1, destino: "Facultad de Ciencias Físico Matemáticas", rol: "Conductor", pasajeros: 2, fecha: "2025-10-01", hora: "10:00 am", costo: 40, distancia: 15, estado: "Terminado" })}
                    travel={{ id: 1, destino: "Facultad de Ciencias Físico Matemáticas", rol: "Conductor", pasajeros: 2, fecha: "2025-10-01", hora: "10:00 am", costo: 40, distancia: 15, estado: "Terminado" }} onClick={() => setSelectedTravel({ id: 1, destino: "Facultad de Ciencias Físico Matemáticas", rol: "Conductor", pasajeros: 2, fecha: "2025-10-01", hora: "10:00 am", costo: 40, distancia: 15, estado: "Terminado" })} 
                />

                <TravelCard 
                    compact={false} 
                    onclick={() => setSelectedTravel({ id: 2, destino: "Facultad de Informática", rol: "Pasajero", pasajeros: 3, fecha: "2025-10-02", costo: 200, distancia: 17, estado: "Terminado" })}
                    travel={{ id: 2, destino: "Facultad de Informática", rol: "Pasajero", pasajeros: 3, fecha: "2025-10-02", costo: 200, distancia: 17, estado: "Terminado" }} onClick={() => setSelectedTravel({ id: 2, destino: "Facultad de Informática", rol: "Pasajero", pasajeros: 3, fecha: "2025-10-02", costo: 200, distancia: 17, estado: "Terminado" })} 
                />
            </ul>

            {selectedTravel && <TravelDetails selectedTravel={selectedTravel} setSelectedTravel={setSelectedTravel} />}

        </div>

    );
};

export default TravelHistory;
