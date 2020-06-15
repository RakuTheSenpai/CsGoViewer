import React from 'react'
import logo from './logo.svg'
import WeaponGrid from './WeaponGrid/WeaponGrid'
import { Grid } from '@material-ui/core'
import './App.css'
import axios from 'axios'
import Navbar from './Navbar/Navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weaponInventory: []
    }
  }
  STEAM_ID = 'RakuTheSenpai';
  INVENTORY_CALL = 'http://steamcommunity.com/id/' + this.STEAM_ID + '/inventory/json/730/2';
  PROXY_CORS_POLICY = 'https://cors-anywhere.herokuapp.com/';
  getSteamInventory = (INVENTORY_CALL) => {
    axios.get(this.PROXY_CORS_POLICY + INVENTORY_CALL)
      .then(results => {
        const steamInventory = results.data.rgDescriptions;
        this.setState({ weaponInventory: steamInventory })
      })
  };
  componentDidMount() {
    this.getSteamInventory(this.INVENTORY_CALL)
  }

  render() {
    return (
      <div>
        <div className='background-gradient'></div>
        <Navbar />
        <WeaponGrid inventory={this.state.weaponInventory} />
      </div>
    )
  }
}

export default App
