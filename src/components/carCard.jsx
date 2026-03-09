function CarCard({ car, onEdit, onDelete }) {
    return (
        <button className="car-card relative group">
            <img className='img-carCard' src="auto.png" alt="" />
            <div className='flex flex-col'>
                <h3 className='text-xs font-bold w-full'>{car.make} {car.model}</h3>
                <p>Año: {car.year}</p>
                <p>Color: {car.color}</p>
                <p>Placas: {car.plates}</p>
            </div>
            
        </button>
    );
};

export default CarCard;
            