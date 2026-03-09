function TravelDetails({selectedTravel, setSelectedTravel}) {
    return(
        <div className="modal-overlay">

            <div className="travel-modal">
                

                <h2 className="travel-modal-title">
                    Detalles de tu Viaje
                </h2>       

                <div id="travel-id ">
                    <p><span className="font-semibold">ID del viaje:</span> {selectedTravel.id}</p>
                </div>

                <div className="flex flex-col gap-5 divide-y">
                    <p><span className="font-semibold">Rol:</span> {selectedTravel.rol}</p>
                    <p><span className="font-semibold">Destino:</span> {selectedTravel.destino}</p>
                    <div className="multiple-info-container">
                        <p><span className="font-semibold">Fecha: {selectedTravel.fecha}</span></p>
                        <p><span className="font-semibold">Hora: {selectedTravel.hora}</span></p>
                    </div>
                    <div className="multiple-info-container">
                        <p><span className="font-semibold">Pasajeros:</span> {selectedTravel.pasajeros}</p>
                        <p><span className="font-semibold">Distancia: {selectedTravel.distancia} km</span></p>
                    </div>

                    <p><span className="focus-info">Costo: ${selectedTravel.costo} MXN</span></p>
                </div>
                

                <button
                className="modal-close-button"
                onClick={() => setSelectedTravel(null)}
                >
                Cerrar
                </button>

            </div>

        </div>
    );
};

export default TravelDetails;