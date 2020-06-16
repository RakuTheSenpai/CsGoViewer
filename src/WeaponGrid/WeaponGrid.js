import React from 'react'
import { Grid } from '@material-ui/core'
import WeaponCard from './WeaponCard/WeaponCard'

class WeaponGrid extends React.Component {
    render() {
        const inventory = this.props.inventory;
        const WeaponCardComponents = inventory.map(weapon => <WeaponCard key={weapon.id} weapon={weapon} />)
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
}
export default WeaponGrid