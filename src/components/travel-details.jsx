function TravelDetails({selectedTravel, setSelectedTravel}) {
    return(
        <div className="modal-overlay">

            <div className="travel-modal">
                

                <h2 className="travel-modal-title">
                    Detalles de tu Viaje
                </h2>       

                <div id="travel-id ">
                    <p><span className="font-semibold">ID del viaje:</span> {selectedTravel._id}</p>
                </div>

                <div className="flex flex-col gap-5 divide-y">
                    <p><span className="font-semibold">Rol:</span> {selectedTravel.rol}</p>
                    <p><span className="font-semibold">Destino:</span> {selectedTravel.destino.address}</p>
                    <div className="multiple-info-container">
                        <p><span className="font-semibold">Fecha: {selectedTravel.fechaHora.split('T')[0]}</span></p>
                        <p><span className="font-semibold">Hora: {selectedTravel.fechaHora.split('T')[1]}</span></p>
                    </div>
                    <div className="multiple-info-container">
                        <p><span className="font-semibold">Pasajeros:</span> {selectedTravel.asientos_disponibles}</p>
                        <p><span className="font-semibold">Distancia: {selectedTravel.distancia || 0} km</span></p>
                    </div>

                    <p><span className="focus-info">Costo: ${selectedTravel.precio} MXN</span></p>
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