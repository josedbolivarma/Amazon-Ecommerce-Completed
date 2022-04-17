import React, { useEffect, useState } from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from '../components/Markers';
import { useLocation } from 'react-router-dom';

//Material UI
// import { makeStyles } from '@material-ui/core';

const MapView = () => {
    const [state, setState] = useState({
        currentLocation: {lat: '52.52437', lng: '13.41053'},
        zoom: 13
    })

    const location = useLocation();

    useEffect(() => {
        if(location.state.latitude && location.state.longitude) {
            const currentLocation = {
                lat: location.state.latitude,
                lng: location.state.longitude
            }
            setState({...state, currentLocation})
        }
    }, [])
    

  return (
    <MapContainer style={{width: '100vw', height: '100vh'}} center={state.currentLocation}
    zoom={state.zoom}
    >
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
    </MapContainer>
  )
}

export default MapView