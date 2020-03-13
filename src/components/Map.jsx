import React, {useEffect, useState} from 'react';
import './Map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


const MapComp = ({onMarkerSet}) => {
    const [markers, setMarkers] = useState([]);

    const state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 12,
    };

    useEffect(()=> {onMarkerSet(markers.length);}, [markers]);

    const position = [state.lat, state.lng];
    return (
        <div>
            <Map center={position} zoom={state.zoom} onClick={(e) => {
                setMarkers(prev => [...prev, e.latlng]);
            }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((position, idx) =>
                    <Marker key={`marker-${idx}`} position={position}>
                        <Popup>
                            <span>Latitude : {position.lat}</span><br/>
                            <span>Longitude : {position.lng}</span><br/>
                            <button onClick={() => {
                                setMarkers(prev => prev.filter((val)=>val !== position));
                            }}>Supprimer</button>
                        </Popup>
                    </Marker>
                )}
            </Map>
        </div>
    );
};

export default MapComp;