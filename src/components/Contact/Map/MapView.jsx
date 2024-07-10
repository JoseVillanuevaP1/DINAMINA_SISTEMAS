
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapView = () => {
    const containerStyle = {
        width: '100%',
        height: '450px',
    };

    const center = {
        lat: -12.213941727297938,  // Latitud de la ubicación de tu universidad
        lng: -76.93252810769168,  // Longitud de la ubicación de tu universidad
    };

    return (
        <section>
            <div className="map mt-5 ContactPageMap text-center" style={{ width: '100%' }}>
                <LoadScript googleMapsApiKey="AIzaSyCkJhbFIlIYClpWdVjQRaVNPmBcZjQeiiE">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16.5}>
                        {/* Aquí puedes agregar más componentes de Google Maps como marcadores */}
                    </GoogleMap>
                </LoadScript>
            </div>
        </section>
    );
};

export default MapView;
