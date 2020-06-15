import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Searchbar from './Searchbar/Searchbar'
import Select from './Dropdown/Dropdown'
function Navbar() {
    const useStyles = makeStyles((theme) => ({
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: 'white'
        }
    }))

    const classes = useStyles()
    const filterItems = ['Everything']
    const sortItems = ['A-Z', 'Z-A', 'Rarity']

    return (
        <AppBar position='static' color='transparent' style={{ height: '6vh' }}>
            <Toolbar>
                <Typography className={classes.title} variant='h5' noWrap>Inventory</Typography>
                <Select title='Filter' menuItems={filterItems} />
                <Select title='Sort' menuItems={sortItems} />
                <Searchbar />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar