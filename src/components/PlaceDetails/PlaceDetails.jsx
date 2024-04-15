import React from 'react'
// import { Box, Typography, Button, Card, CardMediaia, CardContent, CardActions, Chip } from '@material-ui/core';
// import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
// import PhoneIcon from '@material-ui/icons';

import useStyles from './styles'

const PlaceDetails = ({place}) => {
  const classes = useStyles();
  return (
    <h1>
      {place.name}
    </h1>
  )
}

export default PlaceDetails