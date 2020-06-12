import React from 'react'
import { Grid } from '@material-ui/core'
import WeaponCard from '../WeaponCard/WeaponCard'


function WeaponGrid() {
    return (
        <Grid
            container
            item xs={10}
            justify="center"
            alignItems="center"
        >
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
            <WeaponCard />
        </Grid>
    )
}
export default WeaponGrid