import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import PlaceDetails from "./components/PlaceDetails/PlaceDetails"

import { Grid, CssBaseline } from '@material-ui/core'

function App() {

  // AIzaSyAi5hFSUpw-_Ev7RHeu7AQQ5xWyyrPO8EE

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width:'100vw'}}  >
        <Grid item xs={12} md={4} >
          <List/>
        </Grid>
        <Grid item xs={12} md={4} >
          <Map/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
