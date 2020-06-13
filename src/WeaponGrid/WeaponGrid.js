import React from 'react'
import { Grid } from '@material-ui/core'
import WeaponCard from '../WeaponCard/WeaponCard'

function WeaponGrid(props) {
    const inventory = props.inventory;
    const WeaponCardComponents = Object.keys(inventory).map(key => <WeaponCard key={key} weapon={inventory[key]} />)
    return (
        <Grid
            container
            item xs={10}
            justify="center"
            alignItems="center"
        >
            {WeaponCardComponents}
        </Grid>
    )
}
export default WeaponGrid