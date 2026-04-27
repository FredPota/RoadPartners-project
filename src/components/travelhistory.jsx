import "../assets/containers.css"
import "../assets/loginPage.css"
import TravelDetails from "./travel-details.jsx"
import TravelCard from "./travelCard.jsx";
import TravelCard2 from "./travelCard2.jsx";
import { useState } from "react";

function TravelHistory({travelList}) {

    const [ListTravels, setListTravels] = useState(travelList);

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
                {ListTravels.map((travel) => (
                    <TravelCard2
                        key={travel._id}
                        compact={false}
                        cardStyle={'light'}
                        travel={travel}
                        onclick={() => setSelectedTravel(travel)}
                        onDelete={(id) => {
                            setListTravels(prev => prev.map(t => 
                                t._id === id 
                                    ? { ...t, estado: "cancelado" }  // cambia solo el estado
                                    : t  // los demás quedan igual
                            ));
                        }}
                    />
                ))}
            </ul>

            {selectedTravel && <TravelDetails selectedTravel={selectedTravel} setSelectedTravel={setSelectedTravel} />}

        </div>

    );
};

export default TravelHistory;
