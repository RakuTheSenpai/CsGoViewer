import React from 'react'
import { Grid } from '@material-ui/core'
import { fade, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';

const useStyles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    inputRoot: {
        color: 'inherit',
    }
})
class LoginData extends React.Component {
    constructor() {
        super()
        this.state = {
            steamId: '',
            buttonDisabled: true
        }
    }
    handleUser = event => {
        this.props.handleUser(this.state.steamId)
    }
    updateUser = event => {
        const user = event.target.value
        if (user != '') {
            this.setState({ buttonDisabled: false })
        } else {
            this.setState({ buttonDisabled: true })
        }
        this.setState({ steamId: user })

    }
    render() {
        const { classes } = this.props
        return (
            <Grid
                container
                style={{
                    zIndex: '2',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    padding: '40px'
                }}
                item xs={4}
                justify='center'
                alignItems='center'
                direction='column'
            >
                <h3 style={{ color: 'white' }}>Please enter a <a href='https://steamcommunity.com/sharedfiles/filedetails/?id=209000244' style={{ color: 'white' }}>
                    steamID</a> or a profile name.</h3>
                <Grid>
                    <InputBase
                        placeholder='Search…'
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={this.updateUser}
                    />
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={this.handleUser}
                        disabled={this.state.buttonDisabled}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(useStyles)(LoginData)