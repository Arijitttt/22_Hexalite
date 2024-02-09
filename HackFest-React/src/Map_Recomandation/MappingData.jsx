import React, { useRef, useState } from 'react';
import { Map,TileLayer } from 'leaflet';
import '../Map_Recomandation/map.css';
import Provider from './Provider';

export default function MappingData() {
    const [center, setCenter] = useState({ lat: 13.084, lng: 80.24 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
        <>
            mapping 
            <Map
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
                style={{ width: '100%', height: '100vh' }}
            >
                <TileLayer url={Provider.maptiler.url} attribution={Provider.maptiler.attribution} />
            </Map>
        </>
    );
}

