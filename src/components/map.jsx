import { GoogleMap, DirectionsRenderer, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

function Map({ isLoaded, selectedTravel, searchOrigin }) {
    const [directions, setDirections] = useState(null);

    const containerStyle = { width: '100%', height: '100%' };
    const center = { lat: 25.6866, lng: -100.3161 };
    const options = {
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "greedy",
        styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }]
    };

    useEffect(() => {
        if (!selectedTravel || !isLoaded) return;

        const directionsService = new window.google.maps.DirectionsService();

        const origenConductor = {
            lat: selectedTravel.origen.location.coordinates[1],
            lng: selectedTravel.origen.location.coordinates[0]
        };
        const destinoConductor = {
            lat: selectedTravel.destino.location.coordinates[1],
            lng: selectedTravel.destino.location.coordinates[0]
        };

        // Waypoints — tu punto de recogida si existe
        const waypoints = [];
        if (searchOrigin?.location) {
            waypoints.push({
                location: {
                    lat: searchOrigin.location.coordinates[1],
                    lng: searchOrigin.location.coordinates[0]
                },
                stopover: true
            });
        }

        directionsService.route({
            origin: origenConductor,
            destination: destinoConductor,
            waypoints: waypoints,
            travelMode: window.google.maps.TravelMode.DRIVING
        }, (result, status) => {
            if (status === 'OK') {
                setDirections(result);
            } else {
                console.error('Error al obtener ruta:', status);
            }
        });

    }, [selectedTravel]);

    if (!isLoaded) return <div>Cargando mapa...</div>;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={options}
        >
            {/* Ruta del conductor */}
            {directions && (
                <DirectionsRenderer
                    directions={directions}
                    options={{
                        polylineOptions: {
                            strokeColor: '#1D9E75',
                            strokeWeight: 5
                        },
                        suppressMarkers: true // ocultamos markers default para poner los nuestros
                    }}
                />
            )}

            {/* Origen del conductor — verde */}
            {selectedTravel && (
                <Marker
                    position={{
                        lat: selectedTravel.origen.location.coordinates[1],
                        lng: selectedTravel.origen.location.coordinates[0]
                    }}
                    icon={{
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: '#1D9E75',
                        fillOpacity: 1,
                        strokeColor: 'white',
                        strokeWeight: 2
                    }}
                    title="Origen del conductor"
                />
            )}

            {/* Tu punto de recogida — azul */}
            {searchOrigin?.location && (
                <Marker
                    position={{
                        lat: searchOrigin.location.coordinates[1],
                        lng: searchOrigin.location.coordinates[0]
                    }}
                    icon={{
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: '#378ADD',
                        fillOpacity: 1,
                        strokeColor: 'white',
                        strokeWeight: 2
                    }}
                    title="Tu punto de recogida"
                />
            )}

            {/* Destino — rojo */}
            {selectedTravel && (
                <Marker
                    position={{
                        lat: selectedTravel.destino.location.coordinates[1],
                        lng: selectedTravel.destino.location.coordinates[0]
                    }}
                    icon={{
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: '#E24B4A',
                        fillOpacity: 1,
                        strokeColor: 'white',
                        strokeWeight: 2
                    }}
                    title="Destino"
                />
            )}
        </GoogleMap>
    );
}

export default Map;