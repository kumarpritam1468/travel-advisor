import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia style={{ height: 350 }} image={place.photo ? place.photo.images.large.url : 'https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1682337180.jpg?fit=around|562.5:360&crop=562.5:360;*,*'} title={place.name} />

      <CardContent>
        <Typography gutterBottom variant='h5' >
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='space-between' >
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant='subtitle1' >
            Reviewed by {place.num_reviews} users
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' >
          <Typography variant='subtitle1' >
            Ranking
          </Typography>
          <Typography gutterBottom variant='subtitle1' >
            {place.ranking}
          </Typography>
        </Box>

        {place?.awards?.map((award, index) => (
          <Box key={index} my={1} display='flex' justifyContent='space-between' alignItems='center'>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant='subtitle2' color='textSecondary' >
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className={classes.chip} />
        ))}

        {place?.address && (
          <Typography gutterBottom variant='body2' color='textSecondary' className={classes.subtitle}>
            <LocationOnOutlined />
            {place.address}
          </Typography>
        )}

        {place?.address && (
          <Typography gutterBottom variant='body2' color='textSecondary' className={classes.subtitle}>
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')} >
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')} >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails