import AvailableTravelCard from './availableTravelCard.jsx'

function AvailableTravels({setissearching}) {

    return (
        <div className="flex flex-col w-full h-full">
            <div className="
            absolute
            bg-PageLight-950
            w-80 h-9/10
            flex-1 m-5 p-5 pr-5 
            rounded-4xl 
            text-PageDark-950
            right-0">
                <h2 className="title-form h-auto pr-5">Viajes Disponibles</h2>
                <div className='list-container-vertical bg-PageLight-800 rounded-md h-80 p-1'>
                    <AvailableTravelCard />
                    <AvailableTravelCard />
                    <AvailableTravelCard />
                    <AvailableTravelCard />
                    <AvailableTravelCard />
                </div>
                <button className="btnSubmit-form self-center mt-5" onClick={() => setissearching(false)}>Solicitar Viaje</button>
            </div>
            <button className="exit-btn right-10 top-8" onClick={() => setissearching(false)}>X</button>
        </div>
    );
};

export default AvailableTravels;
    