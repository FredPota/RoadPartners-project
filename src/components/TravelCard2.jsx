import StarRating from "./starRating";

/*
 Props:
 - travel   : objeto con { destino, rol, costo, fecha, estado, rating }
 - compact  : boolean — vista compacta (columna) vs normal (fila)
 - onclick  : función al hacer click en la card
 */
import "../assets/travelCard2.css";

function TravelCard2({ compact, travel, onclick }) {
  const isDriver    = travel.rol === "Conductor";
  const isNext      = travel.estado === "Próximo";
  const isDone      = travel.estado === "Terminado";
  const canDelete   = isDriver && isNext;

  const accentColor = isDriver ? "#1D9E75" : "#378ADD";
  const thumbBg     = isDriver ? "#E1F5EE" : "#E6F1FB";
  const carColor    = isDriver ? "#1D9E75" : "#378ADD";

  const roleBadgeClass = isDriver
    ? "tc-role-badge tc-role-driver"
    : "tc-role-badge tc-role-passenger";

  const statusClass = isNext
    ? "tc-status-pill tc-status-next"
    : isDone
    ? "tc-status-pill tc-status-done"
    : "tc-status-pill";

  const handleDelete = (e) => {
    e.stopPropagation();
  };

  if (compact) {
    return (
      <li className="tc-card tc-card--compact group" onClick={onclick}>
        <div className="tc-accent" style={{ background: accentColor }} />
        <div className="tc-top">
          <div className="tc-thumb" style={{ background: thumbBg }}>
            <CarIcon color={carColor} />
          </div>
          <div className="tc-info">
            <p className="tc-dest">{travel.destino}</p>
            <span className={roleBadgeClass}>{travel.rol}</span>
          </div>
        </div>
        <div className="tc-meta">
          <span className="tc-meta-row">
            <ClockIcon />
            {travel.fecha}
          </span>
        </div>
        <div className="tc-footer">
          <StarRating value={travel.rating} readOnly={!isDone} />
          <span className={statusClass}>{travel.estado}</span>
        </div>
      </li>
    );
  }

  return (
    <li className="tc-card group" onClick={onclick}>
      <div className="tc-accent" style={{ background: accentColor }} />

      <div className="tc-top">
        <div className="tc-thumb" style={{ background: thumbBg }}>
          <CarIcon color={carColor} />
        </div>
        <div className="tc-info">
          <p className="tc-dest">{travel.destino}</p>
          <span className={roleBadgeClass}>{travel.rol}</span>
        </div>
      </div>

      <div className="tc-meta">
        <span className="tc-meta-row">
          <ClockIcon />
          {travel.fecha}
        </span>
      </div>

      <div className="tc-footer">
        <div className="tc-footer-left">
          <StarRating value={travel.rating} readOnly={!isDone} />
          <span className={statusClass}>{travel.estado}</span>
        </div>

        <div className="tc-footer-right">
          {travel.costo && (
            <span className="tc-cost">${travel.costo} MXN</span>
          )}
          {canDelete && (
            <><button
              className="tc-delete-btn"
              title="Eliminar viaje"
              onClick={handleDelete}
            >
              <TrashIcon />
              <p>Borrar</p>
            </button></>
          )}
        </div>
      </div>
    </li>
  );
}

/* ── Íconos inline (SVG) ─────────────────────────────────── */

function CarIcon({ color }) {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <path
        d="M6 19h20M8 23h2m12 0h2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 19l2.5-6h17L27 19"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="23" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="22" cy="23" r="2" stroke={color} strokeWidth="1.5" />
      <path
        d="M10 13l2-4h8l2 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      style={{ opacity: 0.5, flexShrink: 0 }}
    >
      <path
        d="M8 1.5A6.5 6.5 0 1 1 1.5 8 6.507 6.507 0 0 1 8 1.5zm0-1a7.5 7.5 0 1 0 0 15A7.5 7.5 0 0 0 8 .5z"
        fill="currentColor"
      />
      <path
        d="M8 4.5v4l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 4h12M5 4V2.5h6V4M6.5 7v5M9.5 7v5M3 4l1 9.5h8L13 4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TravelCard2;
