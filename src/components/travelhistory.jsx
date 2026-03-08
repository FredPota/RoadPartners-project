import "../assets/containers.css"
import "../assets/loginPage.css"
import TravelDetails from "./travel-details.jsx"
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
                <li className="travel-history-card" onClick={() => setSelectedTravel({id:1, destino: "Facultad de Ciencias Físico Matemáticas", rol: "Conductor", pasajeros: 2, fecha: "2025-10-01", hora: "10:00 am", costo: 40, distancia: 15 , estado: "Terminado" })}>
                        <img className="img-travel-history-card" src="auto.png" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="travel-history-card-content">Facultad de Ciencias Físico Matemáticas</p>
                            <p className="travel-history-card-content">Rol: Conductor</p>
                            <p className="travel-history-card-content">Fecha: 2025-10-01</p>
                            <p className="travel-history-card-content">*Terminado*</p>
                        </div>
                        
                </li>
                <li className="travel-history-card" onClick={() => setSelectedTravel({ id:2 , destino: "Facultad de Informática", rol: "Pasajero", pasajeros: 3, fecha: "2025-10-02", costo: 200, distancia: 17 , estado: "Terminado" })}>
                        <img className="img-travel-history-card" src="auto.png" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="travel-history-card-content">Facultad de Informática</p>
                            <p className="travel-history-card-content">Rol: Pasajero <span className="font-semibold">$500 MXN</span></p>
                            <p className="travel-history-card-content">Fecha: 2025-10-02</p>
                            <p className="travel-history-card-content">*Terminado*</p>
                        </div>
                </li>
                <li className="travel-history-card">
                        <img className="img-travel-history-card" src="vite.svg" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="travel-history-card-content">Facultad de Informática</p>
                            <p className="travel-history-card-content">Rol: Conductor</p>
                            <p className="travel-history-card-content">Fecha: 2025-10-03</p>
                            <p className="travel-history-card-content">*Terminado*</p>
                        </div>
                </li>
                <li className="travel-history-card">
                        <img className="img-travel-history-card" src="vite.svg" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="travel-history-card-content">Facultad de Informática</p>
                            <p className="travel-history-card-content">Rol: Pasajero <span className="font-semibold">$500 MXN</span></p>
                            <p className="travel-history-card-content">Fecha: 2025-10-04</p>
                            <p className="travel-history-card-content">*Terminado*</p>
                        </div>
                </li>
                <li className="travel-history-card">
                        <img className="img-travel-history-card" src="vite.svg" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="travel-history-card-content">Facultad de Informática</p>
                            <p className="travel-history-card-content">Rol: Conductor</p>
                            <p className="travel-history-card-content">Fecha: 2025-10-05</p>
                            <p className="travel-history-card-content">*Terminado*</p>
                        </div>
                </li>
                <li className="travel-history-card">
                        <img className="img-travel-history-card" src="vite.svg" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="travel-history-card-content">Facultad de Informática</p>
                            <p className="travel-history-card-content">Rol: Conductor</p>
                            <p className="travel-history-card-content">Fecha: 2025-10-05</p>
                            <p className="travel-history-card-content">*Terminado*</p>
                        </div>
                </li>
                <li className="travel-history-card">
                        <img className="img-travel-history-card" src="vite.svg" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="travel-history-card-content">Facultad de Informática</p>
                            <p className="travel-history-card-content">Rol: Conductor</p>
                            <p className="travel-history-card-content">Fecha: 2025-10-05</p>
                            <p className="travel-history-card-content">*Terminado*</p>
                        </div>
                </li>
            </ul>

            {selectedTravel && <TravelDetails selectedTravel={selectedTravel} setSelectedTravel={setSelectedTravel} />}

        </div>

    );
};

export default TravelHistory;
