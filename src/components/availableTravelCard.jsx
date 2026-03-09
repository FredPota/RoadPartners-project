function AvailableTravelCard({travel}) {

    return (
        <button className="stretched-card p-2">
            <div className="flex gap-1 h-1/2 aspect-square w-full">
                <img className='bg-PageLight-200 p-1 h-full rounded-full' src='usuario.png' alt="Driver" />
                <div className="flex flex-col">
                    <div className="text-xs w-full">Mario ✓</div>
                    <div id="driver-score">4.3 ★</div>
                </div>
                <div className="m-auto text-xl font-semibold">$80 MXN</div>
            </div>
            <div className="divide-x gap-1 flex w-full h-1/2 items-center justify-around" id='travel-info'>
                <div className="text-tiny">San Roque #448</div>
                <div className="text-tiny">Llegada 7:00pm</div>
                <div className="text-tiny w-15"> A 300m de tu destino</div>
            </div>

        </button>
    );

};

export default AvailableTravelCard;