import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {Rating} from '@material-ui/lab'

import useStyles from './styles';
import mapStyles from './mapStyles';

const Map = ({ setBounds, setCoordinates, coordinates, places, setChildClicked}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer} style={{width:'66.5vw'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: import.meta.env.VITE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, nw: e.marginBounds.nw, se: e.marginBounds.se, sw: e.marginBounds.sw});
        }}
        onChildClick={(child) => {setChildClicked(child)}}
      >
        {places?.map((place, index) => (
          <div
            className={classes.markerContainer}
            key={index}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {
              !isDesktop ?
                <LocationOnOutlinedIcon color='primary' fontSize='large' /> : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant='subtitle2' gutterBottom>
                    {place.name}
                  </Typography>
                  <img src={place.photo ? place.photo.images.large.url : 'https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1682337180.jpg?fit=around|562.5:360&crop=562.5:360;*,*'} alt={place.name} className={classes.pointer} />
                  <Rating size='small' value={Number(place.rating)} readOnly />
                </Paper>
              )
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map