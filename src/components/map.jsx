import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function Map() {

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY
    });

    const center = { //Monterrey
        lat: 25.6866,
        lng: -100.3161
    };

    if (!isLoaded) {
        return <div>Cargando...</div>
    }

    const options = {
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "greedy",
        zoomControl: true,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }]
    };

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={options}
        />
    );
};
export default Map;