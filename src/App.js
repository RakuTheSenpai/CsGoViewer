import React from 'react'
import WeaponGrid from './WeaponGrid/WeaponGrid'
import './App.css'
import axios from 'axios'
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weaponInventory: [],
      filteredInventory: [],
      steamId: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  getSteamInventory = (inventory_call) => {
    axios.get(inventory_call)
      .then(results => {
        const responseInventory = results.data.rgDescriptions
        let steamInventory = []
        Object.keys(responseInventory).forEach(key => steamInventory.push(Object.assign(responseInventory[key], { id: key })))
        steamInventory = steamInventory.sort(this.dynamicSort('name'))
        this.setState({ weaponInventory: steamInventory, filteredInventory: steamInventory })
      }).catch(error => {
        console.log(error)
      })
  };

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
    const equipment = ['pistol', 'smg', 'machinegun', 'rifle', 'shotgun', 'knife']
    const stickersGraffitiPatches = ['stickers', 'graffiti', 'patches']
    const containersMore = ['case', 'key', 'storage']
    const display = ['music', 'agent']
    const inventory = this.state.weaponInventory
    const check = (tags, value) => tags.some(tag => value.includes(tag))
    let filtered

    switch (filterParameter) {
      case 'Everything':
        this.setState({
          filteredInventory: inventory
        })
        break
      case 'Equipment':
        filtered = inventory.filter(item => check(equipment, item.type.toLowerCase()))
        this.setState({
          filteredInventory: filtered
        })
        break
      case 'Stickers, Graffiti & Patches':
        filtered = inventory.filter(item => check(stickersGraffitiPatches, item.type.toLowerCase()))
        this.setState({
          filteredInventory: filtered
        })
        break
      case 'Containers & More':
        filtered = inventory.filter(item => check(containersMore, item.type.toLowerCase()))
        this.setState({
          filteredInventory: filtered
        })
        break
      case 'Display':
        filtered = inventory.filter(item => check(display, item.type.toLowerCase()))
        this.setState({
          filteredInventory: filtered
        })
        break
    }
  }

  handleUser = (user) => {
    this.setState({
      steamId: user
    })
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    const INVENTORY_CALL = 'http://steamcommunity.com/id/' + user + '/inventory/json/730/2'
    this.getSteamInventory(CORS_PROXY + INVENTORY_CALL)
  }

  render() {
    if (this.state.steamId == '') { }
    return (
      <div>
        <div className='background-gradient'></div>
        {this.state.steamId != '' ?
          <div><Navbar handleSearch={this.handleSearch} handleSort={this.handleSort} handleFilter={this.handleFilter} />
            <WeaponGrid inventory={this.state.filteredInventory} /></div> : <Login handleUser={this.handleUser} />}
      </div>
    )
  }
}

export default App
