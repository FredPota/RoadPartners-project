import "../assets/TravelDetails.css";

function TravelDetails({onChange, selectedTravel, setSelectedTravel }) {

    const hourTime = new Date(selectedTravel.fechaHora);

    const hour = hourTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    const handlerInitiateTravel = async (e) => {
        e.stopPropagation();
        if (!window.confirm("¿Estás seguro de que deseas iniciar este viaje?")) {
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/travels/initiate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ id_viaje: selectedTravel._id })
                
            });
            const data = await response.json();

            console.log('Respuesta al iniciar el viaje:', data);
            if (!response.ok) {
                throw new Error('Error al iniciar el viaje');
            }
            // Aquí podrías actualizar el estado del viaje para reflejar que ha sido iniciado
            setSelectedTravel(prev => ({ ...prev, estado: "En curso" }));
        } catch (error) {
            console.error('Error al iniciar el viaje:', error);
        }
    };

    const handlerFinishTravel = async (e) => {
        e.stopPropagation();
        if (!window.confirm("¿Estás seguro de que deseas finalizar este viaje?")) {
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/travels/finish`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ id_viaje: selectedTravel._id })
            });
            const data = await response.json();
            console.log('Respuesta al finalizar el viaje:', data);
            if (!response.ok) {
                throw new Error('Error al finalizar el viaje');
            }
            // Aquí podrías actualizar el estado del viaje para reflejar que ha sido finalizado
            setSelectedTravel(prev => ({ ...prev, estado: "Finalizado" }));
        }
        catch (error) {
            console.error('Error al finalizar el viaje:', error);
        }
    };



    return (
        <div className="travel-modal-overlay">

            <div className="travel-details-modal">

                {/* Header */}
                <div className="travel-details-header">

                    <div>
                        <p className="travel-details-label">
                            Viaje
                        </p>

                        <h2 className="travel-details-title">
                            Detalles del viaje
                        </h2>
                    </div>

                    <span
                        className={`travel-status-badge ${
                            selectedTravel.estado === "En curso"
                                ? "travel-status-active"
                                : "travel-status-next"
                        }`}
                    >
                        {selectedTravel.estado}
                    </span>

                </div>

                {/* ID */}
                <div className="travel-info-card">

                    <p className="travel-info-label">
                        ID del viaje
                    </p>

                    <p className="travel-info-value text-xs break-all">
                        {selectedTravel._id}
                    </p>

                </div>

                {/* Información principal */}
                <div className="travel-info-grid">

                    <div className="travel-info-card">
                        <p className="travel-info-label">Rol</p>

                        <p className="travel-info-value">
                            {selectedTravel.rol}
                        </p>
                    </div>

                    <div className="travel-info-card">
                        <p className="travel-info-label">Pasajeros</p>

                        <p className="travel-info-value">
                            {selectedTravel.asientos_disponibles}
                        </p>
                    </div>

                    <div className="travel-info-card col-span-2">
                        <p className="travel-info-label">Destino</p>

                        <p className="travel-info-value">
                            {selectedTravel.destino.address}
                        </p>
                    </div>

                    <div className="travel-info-card">
                        <p className="travel-info-label">Fecha</p>

                        <p className="travel-info-value">
                            {selectedTravel.fechaHora.split('T')[0]}
                        </p>
                    </div>

                    <div className="travel-info-card">
                        <p className="travel-info-label">Hora</p>

                        <p className="travel-info-value">
                            {hour}
                        </p>
                    </div>

                    <div className="travel-info-card">
                        <p className="travel-info-label">Distancia</p>

                        <p className="travel-info-value">
                            {selectedTravel.distancia || 0} km
                        </p>
                    </div>

                    <div className="travel-info-card">
                        <p className="travel-info-label">Costo</p>

                        <p className="travel-price">
                            ${selectedTravel.precio} MXN
                        </p>
                    </div>

                </div>

                {/* Acciones */}
                {selectedTravel.estado === "Próximo" && (
                    <div className="travel-actions">

                        <button className="travel-btn-secondary" onClick={handlerInitiateTravel}>
                            Cancelar viaje
                        </button>

                        <button className="travel-btn-primary" onClick={handlerInitiateTravel}>
                            Iniciar viaje
                        </button>

                    </div>
                )}

                {selectedTravel.estado === "en curso" && (
                    <div className="travel-actions">

                        <button className="travel-btn-danger" onClick={handlerFinishTravel}>
                            Finalizar viaje
                        </button>

                    </div>
                )}

                {/* Footer */}
                <button
                    className="travel-close-btn"
                    onClick={() => setSelectedTravel(null)}
                >
                    Cerrar
                </button>

            </div>

        </div>
    );
}

export default TravelDetails;