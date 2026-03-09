import StarRating from "./starRating";
import { useState } from "react";


//Convertir las cartas de viajes recientes en un componente reutilizable, para mostrar los detalles del viaje al hacer click en la carta
// y para mostrar los viajes disponibles al hacer una busqueda
function TravelCard({compact, travel, onclick}) {

    return (
        <li className={compact ? "travel-history-card-compact" : "travel-history-card"} onClick={onclick}>
            <div className="flex gap-4">
                <img className={compact ? "img-travel-history-card-compact" : "img-travel-history-card"} src="auto.png" alt="" />
                <div className="flex flex-col gap-1">
                    <p className={compact ? "travel-history-card-compact-content" : "travel-history-card-content"}>{travel.destino}</p>
                    <p className={compact ? "travel-history-card-compact-content" : "travel-history-card-content"}>Rol: {travel.rol} <span className="font-semibold">{travel.costo ? `$${travel.costo} MXN` : ''}</span></p>
                    <p className={compact ? "travel-history-card-compact-content" : "travel-history-card-content"}>Fecha: {travel.fecha}</p>
                    <p className={compact ? "travel-history-card-compact-content" : "travel-history-card-content"}>{travel.estado}</p>
                </div>
            </div>
            <StarRating value={travel.rating} readOnly={true} />
        </li>
    );
}

export default TravelCard;