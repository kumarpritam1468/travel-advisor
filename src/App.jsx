import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"

import { getPlacesData } from './api'

import { Grid, CssBaseline } from '@material-ui/core'

function App() {

  const [childClicked, setChildClicked] = useState(null);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      // console.log(data);
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    }).catch((err) => {
      console.error(err);
    })
  }, [coordinates, bounds, type]);


  // AIzaSyAi5hFSUpw-_Ev7RHeu7AQQ5xWyyrPO8EE

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100vw' }}  >
        <Grid item xs={12} md={4} >
          <List places={filteredPlaces.length ? filteredPlaces : places} childClicked={childClicked} isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating} />
        </Grid>
        <Grid item xs={12} md={4} >
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={filteredPlaces.length ? filteredPlaces : places} setChildClicked={setChildClicked} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
