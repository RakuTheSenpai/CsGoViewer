import React from 'react'
import { Grid } from '@material-ui/core'
import LoginData from './LoginData/LoginData'

class Login extends React.Component {
    render() {
        return <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{
                height: '90vh',
            }}
        >
            <LoginData handleUser={this.props.handleUser} />
        </Grid >
    }
}
export default Login