import React from 'react'
import { Grid } from '@material-ui/core'
import './WeaponCard.css'

class WeaponCard extends React.Component {
    render() {
        const weapon = this.props.weapon
        const { name, name_color, icon_url } = weapon

        return (
            <Grid
                container
                item xs={12} sm={2}
                justify='center'
                style={{
                    padding: 20,
                    zIndex: 2,
                }}
            >
                <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0, 0)' }}>
                    <div style={{ backgroundColor: '#' + name_color, width: '100%', height: '100%', overflow: 'hidden' }}>
                        <img
                            className='image-background'
                            src={'http://cdn.steamcommunity.com/economy/image/' + icon_url}
                            style={{ width: '95%', height: '100%', float: 'right' }}
                        />
                    </div>
                    <p
                        style={{
                            color: 'white',
                            fontSize: '100%',
                            fontWeight: 'bold',
                        }}
                    >
                        {name}
                    </p>
                </div>
            </Grid >
        )
    }
}
export default WeaponCard