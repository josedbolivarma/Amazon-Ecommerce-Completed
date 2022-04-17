import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';

import RoomIcon from '@material-ui/icons/Room';

const Markers = () => {
  return (
    <Marker position={{lat: '51.528845', lng: '-0.172728'}} icon={IconLocation} />
  )
}

export default Markers