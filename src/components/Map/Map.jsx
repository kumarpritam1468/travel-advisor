import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {Rating} from '@material-ui/lab'

import useStyles from './styles';

const Map = ({ setBounds, setCoordinates, coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer} style={{width:'66.5vw'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: "AIzaSyAi5hFSUpw-_Ev7RHeu7AQQ5xWyyrPO8EE" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, nw: e.marginBounds.nw, se: e.marginBounds.se, sw: e.marginBounds.sw});
        }}
        // onChildClick={''}
      >
        <LocationOnOutlinedIcon/>
      </GoogleMapReact>
    </div>
  )
}

export default Map