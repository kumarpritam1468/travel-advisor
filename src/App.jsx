import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import PlaceDetails from "./components/PlaceDetails/PlaceDetails"

import { getPlacesData } from './api'

import { Grid, CssBaseline } from '@material-ui/core'

function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      // console.log(data);
      setPlaces(data);
    }).catch((err) => {
      console.error(err);
    })
  }, [coordinates, bounds]);


  // AIzaSyAi5hFSUpw-_Ev7RHeu7AQQ5xWyyrPO8EE

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100vw' }}  >
        <Grid item xs={12} md={4} >
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={4} >
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
