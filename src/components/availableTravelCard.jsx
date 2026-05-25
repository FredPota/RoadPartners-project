import {useState, useEffect} from 'react';
import ReviewsPopUp from './reviewsPopup.jsx';

function AvailableTravelCard({ travel, onclick }) {

    const [hasReviews, setHasReviews] = useState(false);
    const [mouseLocation, setMouseLocation] = useState({x: 0, y: 0});

    const horaSalida = new Date(travel.horaLlegadaRecogida);
    const horaLlegada = new Date(travel.horaLlegadaDestino);
    const options = { hour: '2-digit', minute: '2-digit' };
    const horaSalidaFormatted = horaSalida.toLocaleTimeString([], options);
    const horaLlegadaFormatted = horaLlegada.toLocaleTimeString([], options);
    const FechaSalidaFormatted = horaSalida.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' });

    const [driver, setDriver] = useState({ name: 'Cargando...', score: 0, verified: false });

    useEffect(() => {
        if (!travel.id_conductor) return; // ← evita llamar si no hay id

        const fetchDriver = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/getProfile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({ userId: travel.id_conductor })
                });
                const data = await response.json();
                console.log('Conductor:', data);
                setDriver(data);
            } catch (error) {
                console.error('Error al obtener conductor:', error);
            }
        };

        fetchDriver();
    }, [travel.id_conductor]);

    return (
        <button className="relative stretched-card p-2 group" onClick={() => onclick(travel)}>
            <div className="flex gap-1 h-1/2 aspect-square w-full">
                <img onClick={(e) => {setMouseLocation({x: e.clientX, y: e.clientY}); setHasReviews(!hasReviews)}} className='bg-white h-full rounded-full inset-ring-PageGreen-700 group-hover:inset-ring-4 p-2 transition-all duation-200 ease-in-out ' src='usuario.png' alt="Driver" />
                <div className="flex text-start justify-center flex-col">
                    <strong className="text-xs w-full">{driver.nombre} {driver.verificado === true ? <CheckIcon /> : null}</strong>
                    <div id=" driver-score">{driver.calificacion || 0} ★   
                        <span className="text-extraTiny text-gray-500"> {FechaSalidaFormatted}</span>
                    </div>
                </div>
                <div className="m-auto text-xl font-semibold">${travel.precio} MXN</div>
                {hasReviews==true && <ReviewsPopUp x={mouseLocation.x} y={mouseLocation.y} />}
            </div>
            <div className="divide-x gap-1 flex w-full h-1/2 items-center justify-around" id='travel-info'>
                <div className="text-extraTiny">{travel.destino.address}</div>
                <div className="text-extraTiny">De {horaSalidaFormatted}</div>
                <div className="text-extraTiny">A {horaLlegadaFormatted}</div>

            </div>

        </button>
    );

};

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M2 5l2.5 2.5L8 3"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AvailableTravelCard;