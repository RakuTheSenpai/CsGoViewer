import React from 'react'
import { fade, withStyles } from '@material-ui/core/styles';
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
        padding: theme.spacing(1, 1, 1, 1),
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

class Searchbar extends React.Component {
    handleSearch = event => {
        const searchTerm = event.target.value.toLowerCase()
        this.props.handleSearch(searchTerm)
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.search}>
                <InputBase
                    placeholder='Search…'
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={this.handleSearch}
                />
            </div>
        )
    }
}
export default withStyles(useStyles)(Searchbar)