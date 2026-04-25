import StarRating from "./starRating";
import ReviewForm from "./reviewForm";
import { useState } from "react";
import '../assets/profileCards2.css';

/*
 * Props:
 - name      : string  — nombre del compañero
 - date      : string  — fecha del viaje compartido
 - dest      : string  — destino del viaje
 - photoSrc  : string  — ruta de la foto (opcional)
 - verified  : boolean — muestra palomita si es true
 */
function ProfileCards2({ name, date, dest, photoSrc, verified }) {
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <>
      <button className="pc-card group" >

        {/* Avatar + badge de verificación */}
        <div className="pc-avatar-container">
          <div className="pc-avatar-wrap">
            {photoSrc ? (
              <img className="pc-avatar-img" src={photoSrc} alt={name} />
            ) : (
              <div className="pc-avatar-fallback">
                <UserIcon />
              </div>
            )}
          </div>

          {verified && (
            <div className="pc-verified-badge" title="Cuenta verificada">
              <CheckIcon />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pc-body">
          <p className="pc-name">{name ?? "Usuario"}</p>

          <div className="pc-trip-badge">
            <DestIcon />
            <span>{dest ?? "Destino"}</span>
          </div>

          <p className="pc-date">{date ?? "Fecha"}</p>
        </div>

        {/* Rating */}
        <div className="pc-footer" onClick={(e) => {
          setRating(true);
          console.log("Rating clicked");
          e.stopPropagation(); // Evita que el click se propague al botón principal
        }}>
          <StarRating value={rating} onChange={setRating} />
        </div>

      </button>
      {rating === true && <ReviewForm setreview={setRating} />}
    </>
  );
}

/* ── Íconos inline ───────────────────────────────────────── */

function UserIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="18" r="9" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M6 42c0-9.941 8.059-18 18-18s18 8.059 18 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DestIcon() {
  return (
    <svg
      width="12" height="12" viewBox="0 0 16 16" fill="none"
      style={{ flexShrink: 0, opacity: 0.5 }}
    >
      <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 1a5 5 0 0 1 5 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 0 1 5-5z"
        stroke="currentColor" strokeWidth="1.3"
      />
    </svg>
  );
}

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

export default ProfileCards2;
