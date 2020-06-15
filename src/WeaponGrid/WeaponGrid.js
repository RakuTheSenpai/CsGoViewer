import React from 'react'
import { Grid } from '@material-ui/core'
import WeaponCard from './WeaponCard/WeaponCard'

function WeaponGrid(props) {
    const inventory = props.inventory;
    const WeaponCardComponents = Object.keys(inventory).map(key => <WeaponCard key={key} weapon={inventory[key]} />)
    return (
        <Grid
            container
            item xs={12}
            justify="center"
            alignItems="flex-start"
            style={{
                overflow: 'hidden',
                overflowY: 'auto',
                position: 'relative',
                height: '94vh',
                bottom: 0,
                padding: 40,
                width: '100%',
                backgroundColor: 'rgba(0,0,0, 0.4)'

            }}
        >
            {WeaponCardComponents}
        </Grid >
    )
}
export default WeaponGrid