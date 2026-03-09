import CarForm from './carForm.jsx';
import CarCard from './carCard.jsx';
import InsuranceForm from './insuranceForm.jsx';
import { useState } from 'react';

function CarSection() {

    const [showCarForm, setShowCarForm] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [showInsuranceForm, setShowInsuranceForm] = useState(false);

    const handleAddCar = () => {
        setShowCarForm(true);
    };

    const handleAddInsurance = () => {
        setShowInsuranceForm(true);
    }

    return (
        <div className='relative flex flex-col h-auto w-200 gap-5'>
            <div className="verified-cars-container h-full">
                <h3 className='bg-[#262626] p-2 absolute -top-5 left-5'>Tus vehiculos</h3>
                <ul className="list-container h-full">
                    <CarCard car={{ make: 'Toyota', model: 'Corolla', year: 2020, color: 'Verde', plates: 'ABC-123' }} />
                </ul>
            </div>

            <button className="profile-btn w-1/3 ml-15" onClick={handleAddCar}>
                Agregar Vehículo
            </button>

                {showCarForm && <CarForm onexit={() => setShowCarForm(false)} />}

            <div className='relative login-form w-150 max-w-auto' >
                <div className='absolute bg-[#262626] p-2 -top-5 left-2'>Detalles del vehiculo</div>
                <div className='login-group text-2xl font-semibold'>
                    <div className='' id="carMark">Toyota</div>
                    <div id="carModel"> Carolla </div>
                    <div id="carYear">2020</div>
                </div>
                <div id="carCapacity">Capacidad de 5 personas</div>
                <div id="carColor"> Color Verde </div>
                <div id="carPlates">Placas: ABC-123</div>
                <div id="seguro">No Asegurado</div>
                <div className="nav-btns gap-5">
                    <button className="profile-btn">Eliminar Vehículo</button>
                    {/* <button className="profile-btn" onClick={handleAddInsurance}>
                        Asegurar Vehículo
                    </button> */}
                    {showInsuranceForm && <InsuranceForm onexit={() => setShowInsuranceForm(false)} />}
                </div>
                
            </div>



        </div>

    );

};
export default CarSection;