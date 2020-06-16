import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Searchbar from './Searchbar/Searchbar'
import Dropdown from './Dropdown/Dropdown'
const useStyles = theme => ({
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: 'white'
    }
})

class Navbar extends React.Component {
    render() {
        const { classes } = this.props
        const filterItems = ['Everything']
        const sortItems = ['A-Z', 'Z-A', 'Rarity']
        return (
            <AppBar position='static' color='transparent' style={{ height: '6vh' }}>
                <Toolbar>
                    <Typography className={classes.title} variant='h5' noWrap>Inventory</Typography>
                    <Dropdown title='Filter' menuItems={filterItems} handleSelection={this.props.handleFilter} />
                    <Dropdown title='Sort' menuItems={sortItems} handleSelection={this.props.handleSort} />
                    <Searchbar handleSearch={this.props.handleSearch} />
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(useStyles)(Navbar)