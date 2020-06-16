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
      weaponInventory: [],
      filteredInventory: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }
  STEAM_ID = 'anomaly'

  INVENTORY_CALL = 'http://steamcommunity.com/id/' + this.STEAM_ID + '/inventory/json/730/2'
  PROXY_CORS_POLICY = 'https://cors-anywhere.herokuapp.com/'

  getSteamInventory = (INVENTORY_CALL) => {
    axios.get(this.PROXY_CORS_POLICY + INVENTORY_CALL)
      .then(results => {
        const responseInventory = results.data.rgDescriptions
        let steamInventory = []
        Object.keys(responseInventory).forEach(key => steamInventory.push(Object.assign(responseInventory[key], { id: key })))
        this.setState({ weaponInventory: steamInventory, filteredInventory: steamInventory })
        console.log(steamInventory)
      }).catch(error => {
        console.log(error)
      })
  };

  componentDidMount() {
    this.getSteamInventory(this.INVENTORY_CALL)
  }

  handleSearch = (searchTerm) => {
    const inventory = this.state.weaponInventory
    const filtered = inventory.filter(weapon => weapon.name.toLowerCase().includes(searchTerm))
    if (searchTerm === '') {
      this.setState({ filteredInventory: this.state.weaponInventory })
    } else {
      this.setState({ filteredInventory: filtered })
    }

  }

  dynamicSort = property => {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
      return result * sortOrder
    }
  }

  getRarity = weapon => {
    const { tags } = weapon
    const rarity = tags.filter(tag => tag.category == 'Rarity')[0].color
    return rarity
  }


  handleSort = (sortParameter) => {
    const values = {
      'b0c3d9': 1,
      '5e98d9': 2,
      '4b69ff': 3,
      '8847ff': 4,
      'd32ce6': 5,
      'eb4b4b': 6,
      '886a08': 7,
      '6a6156': 8,
      'e4ae39': 9

    }
    const inventory = this.state.weaponInventory
    const inventoryFiltred = this.state.filteredInventory
    let inventorySorted, filteredSorted
    switch (sortParameter) {
      case 'A-Z':
        inventorySorted = inventory.sort(this.dynamicSort('name'))
        filteredSorted = inventoryFiltred.sort(this.dynamicSort('name'))
        this.setState({
          filteredInventory: filteredSorted,
          weaponInventory: inventorySorted
        })
        break
      case 'Z-A':
        inventorySorted = inventory.sort(this.dynamicSort('name')).reverse()
        filteredSorted = inventoryFiltred.sort(this.dynamicSort('name')).reverse()
        this.setState({
          filteredInventory: filteredSorted,
          weaponInventory: inventorySorted
        })
        break
      case 'Rarity':
        inventorySorted = inventory.sort((a, b) => values[this.getRarity(a)] < values[this.getRarity(b)] ? -1 : (values[this.getRarity(a)] > values[this.getRarity(b)] ? 1 : 0)).reverse()
        filteredSorted = inventoryFiltred.sort((a, b) => values[this.getRarity(a)] < values[this.getRarity(b)] ? -1 : (values[this.getRarity(a)] > values[this.getRarity(b)] ? 1 : 0)).reverse()
        this.setState({
          filteredInventory: filteredSorted,
          weaponInventory: inventorySorted
        })
        break
    }
  }



  handleFilter = (filterParameter) => {
    console.log(filterParameter)
  }

  render() {
    return (
      <div>
        <div className='background-gradient'></div>
        <Navbar handleSearch={this.handleSearch} handleSort={this.handleSort} handleFilter={this.handleFilter} />
        <WeaponGrid inventory={this.state.filteredInventory} />
      </div>
    )
  }
}

export default App
