import React from 'react'
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core'

function WeaponCard() {
    return (
        <Grid
            container
            item xs={2}
            justify="center"
            alignItems="center"
            style={{ padding: 20 }}
        >
            <Card>
                <CardMedia style={{ height: 0, paddingTop: '70%', backgroundSize: 'cover' }}
                    image={require('../Assets/background.jpg')} />
                <CardContent>
                    Weapon Info
                </CardContent>
            </Card>
        </Grid>
    )
}
export default WeaponCard