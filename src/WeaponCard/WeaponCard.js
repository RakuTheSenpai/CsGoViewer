import React from 'react'
import { Grid, Card, CardContent } from '@material-ui/core'
import './WeaponCard.css'

class WeaponCard extends React.Component {
    darkenColor = (color, percent) => {
        let R = parseInt(color.substring(1, 3), 16)
        let G = parseInt(color.substring(3, 5), 16)
        let B = parseInt(color.substring(5, 7), 16)

        R = parseInt((R * (100 + percent)) / 100)
        G = parseInt((G * (100 + percent)) / 100)
        B = parseInt((B * (100 + percent)) / 100)

        R = R < 255 ? R : 255
        G = G < 255 ? G : 255
        B = B < 255 ? B : 255

        let RR =
            R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16)
        let GG =
            G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16)
        let BB =
            B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16)

        return '#' + RR + GG + BB;
    }
    render() {
        const weapon = this.props.weapon
        const { name, name_color, icon_url } = weapon

        return (
            <Grid
                container
                item xs={2}
                justify='center'
                alignItems='center'
                style={{ padding: 20 }}
            >
                <Card>
                    <img
                        className='image-background'
                        src={'http://cdn.steamcommunity.com/economy/image/' + icon_url}
                        style={{ width: '100%', height: '100%' }}
                    />
                    <CardContent
                        style={{
                            background:
                                'linear-gradient(to right, #' +
                                name_color +
                                ', 80%,' +
                                this.darkenColor('#' + name_color, -45) +
                                ')',
                            color: 'white',
                            fontSize: '100%',
                            fontWeight: 'bold'
                        }}
                    >
                        {name}
                    </CardContent>
                </Card>
            </Grid >
        )
    }
}
export default WeaponCard