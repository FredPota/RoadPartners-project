import { useEffect, useRef } from "react";

function PlacesInput({ placeholder, className, onPlaceSelected }) {
    const inputRef = useRef(null);
    const autocompleteRef = useRef(null);

    useEffect(() => {
        if (!window.google) return;

        autocompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            {
                componentRestrictions: { country: "mx" },
                fields: ["formatted_address", "geometry"]
            }
        );

        autocompleteRef.current.addListener("place_changed", () => {
            const place = autocompleteRef.current.getPlace();
            if (!place.geometry) return;

            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();

            onPlaceSelected({
                address: place.formatted_address,
                location: {
                    type: "Point",
                    coordinates: [lng, lat]
                }
            });
        });

        // Limpia al desmontar el componente
        return () => {
            if (autocompleteRef.current) {
                window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
            }
            // Elimina el dropdown del DOM
            const pacContainers = document.querySelectorAll('.pac-container');
            pacContainers.forEach(el => el.remove());
        };
    }, []);

    return (
        <input
            ref={inputRef}
            className={className}
            placeholder={placeholder}
            type="text"
        />
    );
}

export default PlacesInput;