import {useState} from 'react';
import ReviewsPopUp from './reviewsPopup.jsx';

function AvailableTravelCard({travel}) {

    const [hasReviews, setHasReviews] = useState(false);
    const [mouseLocation, setMouseLocation] = useState({x: 0, y: 0});

    return (
        <button className="relative stretched-card p-2 group">
            <div className="flex gap-1 h-1/2 aspect-square w-full">
                <img onClick={(e) => {setMouseLocation({x: e.clientX, y: e.clientY}); setHasReviews(!hasReviews)}} className='bg-white h-full rounded-full inset-ring-PageGreen-700 group-hover:inset-ring-4 p-2 transition-all duation-200 ease-in-out ' src='usuario.png' alt="Driver" />
                <div className="flex flex-col">
                    <div className="text-xs w-full">Mario ✓</div>
                    <div id="driver-score">4.3 ★</div>
                </div>
                <div className="m-auto text-xl font-semibold">$80 MXN</div>
                {hasReviews==true && <ReviewsPopUp x={mouseLocation.x} y={mouseLocation.y} />}
            </div>
            <div className="divide-x gap-1 flex w-full h-1/2 items-center justify-around" id='travel-info'>
                <div className="text-tiny">San Roque #448</div>
                <div className="text-tiny">Partes 6:20am</div>
                <div className="text-tiny">llegas 6:46am</div>

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