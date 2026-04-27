import { use, useState } from 'react';
import '../assets/createTravel.css';
 
/*
 Props:
  - onexit      : función para cerrar el modal
  - UserCarList : array de objetos car { id, make, model, color, capacity, plates }
 */
function CreateTravelForm({ onexit, UserCarList }) {
    const [carSelected, setCarSelected] = useState(null);
    

    //campos de form
    const [origin, setOrigin] = useState('');
    const [destiny, setDestiny] = useState('');
    const [datetime, setDatetime] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [vehicle, setVehicle] = useState(null);
    const [costPerPerson, setCostPerPerson] = useState(-1);
    const [cost, setCost] = useState(0);




    const handleCarChange = async (e) => {
        const car = UserCarList.find((c) => c._id === (e.target.value));
        setCarSelected(car ?? null);
        setCost(car?.capacidad * 5 ?? 0);

        console.log('Carro seleccionado:', carSelected);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

      try {

        const response = await fetch('http://localhost:3000/createTravel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            origen: {
              address: origin,
              location: {
                type: "Point",
                coordinates: [-50, 20] // Aquí deberías incluir la lógica para obtener las coordenadas reales del origen
              }
            },
            destino: {
              address: destiny,
              location: {
                type: "Point",
                coordinates: [-50, 20] // Aquí deberías incluir la lógica para obtener las coordenadas reales del destino
              }
            },
            fechaHora: datetime,
            asientos_disponibles: passengers,
            precio: cost,
            estado: 'activo',
            id_conductor: JSON.parse(localStorage.getItem('user'))._id,
            id_vehiculo: carSelected._id
          })
          
        });

        const data = await response.json();

        if (response.ok) {
          alert('Viaje creado exitosamente');
          onexit(false);
        } else {
          alert('Error al crear el viaje: ' + data.message);
          console.log('Error details:', {
            origen: origin,
            destino: destiny,
            fechaHora: datetime,
            asientos_disponibles: passengers,
            precio: cost,
            estado: 'activo',
            id_conductor: JSON.parse(localStorage.getItem('user'))._id,
            id_vehiculo: carSelected._id
          });
        }

      } catch (error) {
        console.error('Error al crear el viaje:', error);
        alert('No se pudo crear el viaje. Por favor, intenta nuevamente más tarde.');
      }

    };

    
    
    return (
        <div className="modal-overlay">
            <form method='post' onSubmit={handleSubmit} className="ctf-modal">
        
                {/* Botón cerrar */}
                <button className="ctf-close-btn" onClick={() => onexit(false)}>
                    x
                </button>
        
                {/* Header */}
                <div className="ctf-header">
                    <p className="ctf-title">Crear Viaje</p>
                    <p className="ctf-subtitle">Completa los datos para publicar tu viaje</p>
                </div>
        
                <hr className="ctf-divider" />
        
                {/*  Ruta  */}
                <div className="ctf-section">
                <span className="ctf-section-label">
                    <LocationIcon /> Ruta <span className="ctf-required">*</span>
                </span>
                <div className="ctf-route-block">
                    <div className="ctf-route-row">
                    <span className="ctf-route-dot ctf-dot-origin" />
                    <input
                        className="ctf-route-input"
                        type="text"
                        placeholder="Punto de salida"
                        name="start-origin"
                        id="start-origin"

                        onChange={(e) => setOrigin(e.target.value)}
                    />
                    </div>
                    <div className="ctf-route-sep" />
                    <div className="ctf-route-row">
                    <span className="ctf-route-dot ctf-dot-dest" />
                    <input
                        className="ctf-route-input"
                        type="text"
                        placeholder="Destino"
                        name="start-destiny"
                        id="start-destiny"

                        onChange={(e) => setDestiny(e.target.value)}
                    />
                    </div>
                </div>
                </div>
        
                {/*  Fecha  */}
                <div className="ctf-section">
                <span className="ctf-section-label">
                    <CalendarIcon /> Fecha y hora <span className="ctf-required">*</span>
                </span>
                <div className="ctf-input-icon-wrap">
                    <CalendarIcon className="ctf-input-icon" />
                    <input
                    className="ctf-input ctf-input--icon"
                    type="datetime-local"
                    name="start-datetime"
                    id="start-datetime"
                    onChange={(e) => setDatetime(e.target.value)}
                    />
                </div>
                </div>
        
                {/*  Vehículo  */}
                <div className="ctf-section">
                <span className="ctf-section-label">
                    <CarIcon /> Vehículo <span className="ctf-required">*</span>
                </span>
                <select
                    className="ctf-select"
                    name="vehicle-type"
                    id="vehicle-type"
                    onChange={handleCarChange}
                    defaultValue=""
                >
                    <option value="" disabled>Selecciona tu vehículo</option>
                    {UserCarList.map((car) => (
                        <option key={car._id} value={car._id}>
                            {car.marca} {car.modelo} — {car.placa}
                        </option>
                    ))}
                </select>
        
                {/* Preview del carro seleccionado */}
                {carSelected && (
                    <div className="ctf-car-preview">
                    <CarIconGreen />
                    <span>
                        {carSelected.marca} {carSelected.modelo} · {carSelected.color} · {carSelected.capacidad} personas
                    </span>
                    </div>
                )}
                </div>
        
                {/*  Pasajeros y costo  */}
                <div className="ctf-section">
                <span className="ctf-section-label">
                    <PassengersIcon /> Detalles del viaje
                </span>
                <div className="ctf-row">
                    <div className="ctf-field">
                    <label className="ctf-label" htmlFor="passengers">Número de pasajeros</label>
                    <input
                        className="ctf-input"
                        type="number"
                        name="passengers"
                        id="passengers"
                        min="1"
                        max="8"
                        placeholder="1"
                        onChange={(e) => setPassengers(e.target.value)}
                    />
                    </div>
                    <div className="ctf-field">
                    <label className="ctf-label" htmlFor="cost">Costo por persona </label>
                    <div className="ctf-input-suffix-wrap">
                        <input
                            className="ctf-input ctf-input--suffix"
                            type="number"
                            name="cost"
                            id="cost"
                            min="0"
                            placeholder="0"
                            value={cost}
                            defaultValue={500}
                            onChange={(e) => setCost(e.target.value)}
                        />
                        <span className="ctf-suffix">MXN</span>
                    </div>
                    </div>
                </div>
                <p className="ctf-hint">* El costo es por pasajero</p>
                </div>
        
                <hr className="ctf-divider" />
        
                {/* Submit */}
                <button className="ctf-submit-btn" type='submit'>
                  <PlusIcon />
                  Publicar Viaje
                </button>
        
            </form>
          </div>
    );
}
 



/*  Íconos  */
function CloseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 1a5 5 0 0 1 5 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 6.5h13M5 1.5V4M11 1.5V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function CarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 32 32" fill="none">
      <path d="M6 19h20M8 23h2m12 0h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 19l2.5-6h17L27 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="23" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="23" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CarIconGreen() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
      <path d="M6 19h20M8 23h2m12 0h2" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 19l2.5-6h17L27 19" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="23" r="2" stroke="#1D9E75" strokeWidth="2" />
      <circle cx="22" cy="23" r="2" stroke="#1D9E75" strokeWidth="2" />
    </svg>
  );
}
function PassengersIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 14c0-2.761 2.239-5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="11" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M15 14c0-2.761-2.239-5-5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path d="M7 1v12M1 7h12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
 
export default CreateTravelForm;

export { LocationIcon };