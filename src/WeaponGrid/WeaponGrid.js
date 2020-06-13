import React from 'react'
import { Grid } from '@material-ui/core'
import WeaponCard from '../WeaponCard/WeaponCard'

function WeaponGrid(props) {
    const inventory = props.inventory;
    const WeaponCardComponents = inventory.map(weapon => <WeaponCard key={weapon.instanceid} weapon={weapon} />)
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