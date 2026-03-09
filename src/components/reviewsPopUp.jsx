import { useState } from "react";

function ReviewsPopUp({ x, y }) {
    

    return(
        <div
            className="fixed flex flex-col items-start text-PageDark-100 bg-[#1a1a1a] top-0 left-0 h-50 w-40 rounded-lg z-50 p-2"
            style={{
                left: x - 200, // Ajusta el valor para centrar el pop-up horizontalmente
                top: y -30
            }}
        >   
            <div className="pl-5">Reseñas</div>
            <ul className="list-container-vertical text-start bg-[#ffffff24] rounded-md h-40 p-1">
                <li className="text-tiny">Muy buen conductor, me ayudó con mis maletas</li>
                <li className="text-tiny">El viaje fue muy cómodo, el conductor es muy amable</li>
                <li className="text-tiny">El conductor llegó a tiempo y el viaje fue rápido</li>
            </ul>
        </div>
    );
}

export default ReviewsPopUp;