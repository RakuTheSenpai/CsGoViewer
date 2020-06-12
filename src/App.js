import React from 'react'
import logo from './logo.svg'
import WeaponGrid from './WeaponGrid/WeaponGrid'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: 20 }}
    >
      <WeaponGrid />
    </Grid>
  )
}

export default App
