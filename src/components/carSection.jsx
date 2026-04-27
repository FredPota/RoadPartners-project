import CarForm from './carForm.jsx';
import CarCard from './carCard.jsx';
import InsuranceForm from './insuranceForm.jsx';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../assets/carSection.css";  

const ANIMATION = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
  transition: { duration: 0.2, ease: 'easeOut' },
};

function CarSection({ user, cars }) {
  const [showCarForm, setShowCarForm]           = useState(false);
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);
  const [selectedCar, setSelectedCar]           = useState(cars[0] ?? null);
  const [carList, setCarList]                   = useState(cars);

  const isInsured = selectedCar?.insured ?? false;

  const deleteCar = async (e) => {
    e.preventDefault();

    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este vehículo? Esta acción no se puede deshacer.");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/deleteCar/${selectedCar._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        alert('Vehículo eliminado correctamente');
        
        setCarList(prev => prev.filter(car => car._id !== selectedCar._id));

        setSelectedCar(null);

      } else {
        const errorData = await response.json();
        console.error('Error al eliminar el vehículo:', errorData);
        alert('No se pudo eliminar el vehículo. Por favor, intenta nuevamente más tarde.');
      }

    } catch (error) {
      console.error('Error al eliminar el vehículo:', error);
      alert('No se pudo eliminar el vehículo. Por favor, intenta nuevamente más tarde.');
    }

  };

  return (
    <div className="cs-wrap">

      {/* ── Lista de vehículos ── */}
      <div className="cs-list-panel">
        <h3 className="cs-list-title">Tus vehículos</h3>

        <ul className="cs-car-list">
          {carList.map((car) => (
            <li key={car._id}>
              <button
                className={`cs-car-item group ${selectedCar?._id === car._id ? 'cs-car-item--active' : ''}`}
                onClick={() => setSelectedCar(car)}
              >
                {/* Thumb */}
                <div className={`cs-car-thumb ${car.insured ? 'cs-thumb--insured' : 'cs-thumb--uninsured'}`}>
                  <CarIcon color={car.insured ? '#1D9E75' : '#EF9F27'} />
                </div>

                {/* Info */}
                <div className="cs-car-item-info">
                  <p className="cs-car-item-name">{car.marca} {car.modelo}</p>
                  <p className="cs-car-item-plate">{car.placa}</p>
                </div>

                {/* Dot de estado */}
                {/* <span className={`cs-status-dot ${car.insured ? 'cs-dot--insured' : 'cs-dot--uninsured'}`} /> */}
              </button>
            </li>
          ))}
        </ul>

        <button className="cs-add-btn" onClick={() => setShowCarForm(true)}>
          <PlusIcon />
          Agregar vehículo
        </button>
      </div>

      {/* ── Panel de detalles ── */}
      <div className="cs-detail-panel">
        <AnimatePresence mode="wait">
          {selectedCar ? (
            <motion.div key={selectedCar._id} {...ANIMATION}>

              {/* Header */}
              <div className="cs-detail-header">
                <div>
                  <p className="cs-detail-title">
                    {selectedCar.marca} {selectedCar.modelo} {selectedCar.año}
                  </p>
                  <p className="cs-detail-subtitle">Registrado en tu perfil</p>
                </div>
                {/* <span className={`cs-ins-badge ${isInsured ? 'cs-ins--insured' : 'cs-ins--uninsured'}`}>
                  <span className="cs-ins-dot" />
                  {isInsured ? 'Asegurado' : 'Sin seguro'}
                </span> */}
              </div>

              <hr className="cs-divider" />

              {/* Specs */}
              <div className="cs-specs-grid">
                <div className="cs-spec">
                  <div className="cs-spec-icon"><CapacityIcon /></div>
                  <div>
                    <p className="cs-spec-label">Capacidad</p>
                    <p className="cs-spec-value">{selectedCar.capacidad ?? 5} personas</p>
                  </div>
                </div>
                <div className="cs-spec">
                  <div className="cs-spec-icon"><ColorIcon /></div>
                  <div>
                    <p className="cs-spec-label">Color</p>
                    <p className="cs-spec-value">{selectedCar.color}</p>
                  </div>
                </div>
                <div className="cs-spec">
                  <div className="cs-spec-icon"><PlateIcon /></div>
                  <div>
                    <p className="cs-spec-label">Placas</p>
                    <p className="cs-spec-value">{selectedCar.placa}</p>
                  </div>
                </div>
                <div className="cs-spec">
                  <div className="cs-spec-icon"><YearIcon /></div>
                  <div>
                    <p className="cs-spec-label">Año</p>
                    <p className="cs-spec-value">{selectedCar.año}</p>
                  </div>
                </div>
              </div>

              {/* Advertencia si no tiene seguro */}
              {/* {!isInsured && (
                <div className="cs-warning">
                  <WarningIcon />
                  <p className="cs-warning-text">
                    Este vehículo no tiene seguro activo. Conducir sin seguro es bajo
                    tu propio riesgo y puede afectar tu reputación en la plataforma.
                  </p>
                </div>
              )} */}

              {/* Acciones */}
              <div className="cs-actions">
                {/* <button className="cs-btn-primary" onClick={() => setShowInsuranceForm(true)}>
                  <ShieldIcon />
                  {isInsured ? 'Gestionar seguro' : 'Asegurar vehículo'}
                </button> */}
                <form method='patch' onSubmit={deleteCar} >
                  <button className="cs-btn-danger">
                    <TrashIcon />
                    Eliminar
                  </button>
                </form>
              </div>

            </motion.div>
          ) : (
            <motion.div key="empty" {...ANIMATION} className="cs-empty">
              <p>Selecciona un vehículo para ver sus detalles</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Formularios */}
      {showCarForm      && <CarForm user={user}     onexit={() => setShowCarForm(false)} />}
      {showInsuranceForm && <InsuranceForm onexit={() => setShowInsuranceForm(false)} />}
    </div>
  );
}


/* ── Mock data (reemplaza con tus datos reales) ──────────── */
const MOCK_CARS = [
  { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, color: 'Verde',  plates: 'ABC-123', capacity: 5, insured: true  },
  { id: 2, make: 'Honda',  model: 'Civic',   year: 2019, color: 'Blanco', plates: 'XYZ-456', capacity: 5, insured: false },
];



/* ── Íconos ──────────────────────────────────────────────── */
function CarIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
      <path d="M6 19h20M8 23h2m12 0h2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 19l2.5-6h17L27 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="23" r="2" stroke={color} strokeWidth="1.5"/>
      <circle cx="22" cy="23" r="2" stroke={color} strokeWidth="1.5"/>
      <path d="M10 13l2-4h8l2 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function CapacityIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5" r="2.5" stroke="var(--color-text-secondary)" strokeWidth="1.2"/>
      <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="var(--color-text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function ColorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="var(--color-text-secondary)" strokeWidth="1.2"/>
      <circle cx="8" cy="8" r="2" fill="#378ADD"/>
    </svg>
  );
}
function PlateIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="4" width="13" height="8" rx="1.5" stroke="var(--color-text-secondary)" strokeWidth="1.2"/>
      <path d="M4.5 8h7M4.5 10h3" stroke="var(--color-text-secondary)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
function YearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3" width="13" height="11" rx="1.5" stroke="var(--color-text-secondary)" strokeWidth="1.2"/>
      <path d="M1.5 6.5h13M5 1.5V4M11 1.5V4" stroke="var(--color-text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5l5.5 2v4.5C13.5 11 11 13.5 8 14.5 5 13.5 2.5 11 2.5 8V3.5z" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M5.5 8l2 2 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TrashIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M2 4h12M5 4V2.5h6V4M6.5 7v5M9.5 7v5M3 4l1 9.5h8L13 4"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function WarningIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <path d="M8 1.5l6.5 12h-13z" stroke="#854F0B" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M8 6.5v3M8 11v.5" stroke="#854F0B" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export default CarSection;
