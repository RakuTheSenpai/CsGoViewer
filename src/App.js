import React from 'react'
import logo from './logo.svg'
import WeaponGrid from './WeaponGrid/WeaponGrid'
import { Grid } from '@material-ui/core'
import weaponsInventory from './weaponsTest'
import './App.css'

class App extends React.Component {
  state = {
    weaponInventory: weaponsInventory
  }
  render() {
    return (
      <div className="background_gradient">
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <WeaponGrid inventory={this.state.weaponInventory} />
        </Grid>
      </div>
    )
  }
}

export default App
